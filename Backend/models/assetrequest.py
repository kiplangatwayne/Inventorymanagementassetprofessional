#AssetRequest Model
from models.dbconfig import db

class AssetRequest(db.Model):
    __tablename__ = 'asset_requests'

    id = db.Column(db.Integer, primary_key=True)
    requester_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    asset_id = db.Column(db.Integer, db.ForeignKey('assets.id'))
    quantity = db.Column(db.Integer, nullable=False)
    reason = db.Column(db.String(250), nullable=False)
    urgency = db.Column(db.String(20))  # Define urgency (e.g., High, Medium, Low)
    status = db.Column(db.String(20))  # Define request status (e.g., Pending, Approved, Rejected)
    completion_date = db.Column(db.DateTime)

    