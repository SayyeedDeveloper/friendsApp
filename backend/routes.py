from app import app, db
from flask import request, jsonify
from models import Fried

#get all fried
@app.route('/friends', methods=['GET'])
def get_fried():
    friends = Fried.query.all()
    results = [fried.to_json() for fried in friends]
    return jsonify(results)

#create friend
@app.route('/friends', methods=['POST'])
def create_fried():
    try:
        data = request.json
        required_fields = ['name', 'role', 'description', 'gender']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f"Required field {field} is missing."}), 400

        name = data['name']
        role = data['role']
        description = data['description']
        gender = data['gender']

        if gender == 'male':
            image_url = f"https://avatar.iran.liara.run/public/boy?username=[{name}]"
        elif gender == 'female':
            image_url = f"https://avatar.iran.liara.run/public/girl?username=[{name}]"
        else:
            image_url = None

        new_fried = Fried(name=name, role=role, description=description, gender=gender, image_url=image_url)
        db.session.add(new_fried)
        db.session.commit()

        return jsonify({'message': 'Friend created successfully'}), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)})


#delete friend
@app.route('/friends/<int:id>', methods=['DELETE'])
def delete_friend(id):
    try:
        fried = Fried.query.get(id)
        if fried:
            db.session.delete(fried)
            db.session.commit()
            return jsonify({'message': 'Friend deleted successfully'})
        else:
            return jsonify({'error': f"Fried with id {id} doesn't exist."}), 404
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

#update friend
@app.route('/friends/<int:id>', methods=['PUT'])
def update_friend(id):
    try:
        fried = Fried.query.get(id)
        if fried:
            data = request.json
            fried.name = data.get('name', fried.name)
            fried.role = data.get('role', fried.role)
            fried.description = data.get('description', fried.description)
            fried.gender = data.get('gender', fried.gender)
            if data.get('gender') == 'male':
                fried.image_url = f"https://avatar.iran.liara.run/public/boy?username=[{data.get('name')}]"
            elif data.get('gender')  == 'female':
                fried.image_url = f"https://avatar.iran.liara.run/public/girl?username=[{data.get('name')}]"
            else:
                fried.image_url = None

            db.session.commit()

            return jsonify(fried.to_json())
        else:
            return jsonify({'error': f"Fried with id {id} doesn't exist."}), 404

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

