const mongoose=require("mongoose");
const uri="mongodb+srv://naval2:sOiwOlVD4Sv17Cyz@kuyoblogs.8kiwp2a.mongodb.net/kuyoBlogs?retryWrites=true&w=majority&appName=kuyoBlogs";

// here we needed to write kuyoBlogs(name of our database) in between /? so that our code knows that from which database we are supposed to search the data

const mongodb = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true, // Option to use new URL string parser
            useUnifiedTopology: true // Option to use the new topology engine
        });
        console.log("Connected to MongoDB");

        const fetched_data= await mongoose.connection.db.collection("blogDetails");
        // fetched_data.find({}).toArray(( err,data)=>{ 
        //     if(err) console.log(err);
        //     else console.log(data);
        // })
        
        const count = await fetched_data.countDocuments();
        console.log(`Number of documents in blogDetails: ${count}`);

        global.BlogData = await fetched_data.find({}).toArray();
        // console.log('Documents:', global.BlogData);

    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
};
module.exports= mongodb;