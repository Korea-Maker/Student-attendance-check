from pymongo import MongoClient
from datetime import datetime, timedelta

client = MongoClient("mongodb://localhost:27017/")
db = client["attendance_system"]

class Session:
    @staticmethod
    def create_session(user_id: int):
        session_token = generate_session_token()
        expires_at = datetime.utcnow() + timedelta(hours=1)
        db.sessions.insert_one({
            "user_id": user_id,
            "session_token": session_token,
            "expires_at": expires_at
        })
        return session_token

    @staticmethod
    def get_session(session_token: str):
        session = db.sessions.find_one({"session_token": session_token})
        if session and session["expires_at"] > datetime.utcnow():
            return session
        return None

    @staticmethod
    def delete_session(session_token: str):
        db.sessions.delete_one({"session_token": session_token})
