import json

def return_db_content():
    try:
        with open("db.json","r") as file:
            db = json.load(file)
            return db
    except:
        print("could not retrieve db content...")
        return None

def add_log(newLog):
    db = {}
    try:
        db = json.load(open("db.json","r", encoding="utf-8"))
        db["logs"].append(newLog)
        json.dump(db, open("db.json","w", encoding="utf-8"), ensure_ascii=False)
    except:
        print("could not append record to db")
      
def clear_logs():
    json.dump({"logs":[]}, open("db.json","w"))

# def add_record(product_name, vendor, price, date):
#     db = {}
#     try:
#         db = json.load(open("db.json","r", encoding="utf-8"))
#         db["records"].append({"product_name":product_name, "vendor":vendor, "price":price, "date":date})
#         json.dump(db, open("db.json","w", encoding="utf-8"), ensure_ascii=False)
#     except:
#         print("could not append record to db")
            

# def clear_db():
#     json.dump({"records":[]}, open("db.json","w"))

# def addUser(*args,**kwargs):
#     newUser = {}
#     for key, value in kwargs.items():
#         newUser[key] = value
#     if(args):
#         newUser["extra_details"] = args
#     if not validateUser(newUser):
#         print("new user failed the validation.")
#         return
#     try:
#         db = returnDBContent()
#         db["users"].append(newUser)
#         print("new user added...")
#     except:
#         print("no db file exists, a new one will be created...")
#         db = {"users":[newUser]}
#     with open("db.json", "w") as file:
#         json.dump(db, file)
#         print("new user added...")