import db from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import User from "@/models/User";


export async function PUT(req, res){
    db.connect()
    const data = await req.json();
    const {_id, name, image, ...otherUserInfo} = data;
  
    let filter = {};
    if (_id) {
      filter = {_id};
    } else {
      const session = await getServerSession(authOptions);
      const email = session.user.email;
      filter = {email};
    }
  
    const user = await User.findOne(filter);
    await User.updateOne(filter, {name, image});
  
    return Response.json(true);
}