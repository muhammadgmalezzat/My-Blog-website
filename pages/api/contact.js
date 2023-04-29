import {MongoClient} from 'mongodb'

async function handler(req, res) {
    if (req.method === "POST") {
        const { email, name, message } = req.body;
        //server-side validation
        if (!email || !name || !message || !email.includes("@" || name.trim() === "" || message.trim() === "")) { 
            res.status(422).json({ message: "Invalid Input"})
            return;
        }
        let client;
        const newMessage = { email, name, message }
        const connectionString=`mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.0h0scbc.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
        try {
        client = await MongoClient.connect(connectionString)
        } catch (error) {
            res.status(500).json({ message: "Connection to Database Failed"})
            return;
        }
        const db = client.db();

        try {
            const result = await db.collection("email-messages").insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) { 
            client.close();
            res.status(500).json({ message: "Sending message to Database Failed"})
            return;
        }
        client.close();
        res.status(200).json({ message: "Message Successfully Sent" ,newMessage: newMessage})
    }
}
export default handler;
