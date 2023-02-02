from fastapi import FastAPI
import aiosqlite
from fastapi.responses import UJSONResponse, RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from cache import AsyncTTL


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)


@AsyncTTL(time_to_live=30, maxsize=64)
async def fetch_all(key: str):
    global db
    async with db.execute(f'SELECT * FROM {key};') as cursor:
        values = await cursor.fetchall()
        results = [dict(line) for line in [zip([column[0] for column in cursor.description], row) for row in values]]
        return results


@app.on_event("startup")
async def startup():
    global db
    db = await aiosqlite.connect("database/database.db")
    assert isinstance(db, aiosqlite.Connection)


@app.on_event("shutdown")
async def shutdown():
    await db.close()


@app.get("/AnnouncementList", response_class=UJSONResponse)
async def fetch_announcements():
    r = await fetch_all("AnnouncementList")
    return UJSONResponse(content=r)


@app.get("/PAList", response_class=UJSONResponse)
async def fetch_pas():
    r = await fetch_all("PAList")
    return UJSONResponse(content=r)


@app.get("/ProductList", response_class=UJSONResponse)
async def fetch_products():
    r = await fetch_all("ProductList")
    return UJSONResponse(content=r)


@app.get("/SolutionList", response_class=UJSONResponse)
async def fetch_solutions():
    r = await fetch_all("SolutionList")
    return UJSONResponse(content=r)


@app.get("/TypeList", response_class=UJSONResponse)
async def fetch_types():
    r = await fetch_all("TypeList")
    return UJSONResponse(content=r)


@app.get("/VerticalList", response_class=UJSONResponse)
async def fetch_verticals():
    r = await fetch_all("VerticalList")
    return UJSONResponse(content=r)


@app.get("/")
async def index():
    return RedirectResponse(url="/docs", status_code=302)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="localhost", port=5297, reload=False, debug=False)
