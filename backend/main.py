import database
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import sqlite3

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# connect database
conn = sqlite3.connect("users.db", check_same_thread=False)
cursor = conn.cursor()

class User(BaseModel):
    name: str
    email: str

@app.post("/submit")
def submit(user: User):
    cursor.execute(
        "INSERT INTO users (name, email) VALUES (?, ?)",
        (user.name, user.email)
    )
    conn.commit()

    return {"message": "Data stored successfully"}

@app.get("/data")
def get_data():
    cursor.execute("SELECT * FROM users")
    rows = cursor.fetchall()
    return rows