app.get('/books/:id',(req,res)=>{
        const book=books.find(b=>b.id==req.params.id);
        if(book){
            res.json(book);
        }
        else{
            res.status(404).send(Book not found);
        }
    });
    
    app.post('/books',(req,res)=>{
        const newBook={
            id:(books.length+1).toString(),
            title:req.body.title,
            author:req.body.author
        };
        res.status(201).json(newBook; }
    );
    
    app.put('/books/:id',(req,res)=>{
        const.bookIndex=books.findIndex(b=b.id===req.params.id);
        if(bookIndex==-1){
            book[bookIndex]={
                ...books[bookIndex],...req.body};
                res.json(books[bookIndex]);
        }
        else{
            res.status(404).send('Book not found');
        }
    });
    
    app.delete('/books/:id',(req,res)=>{
        const initialLength=books.length;
        books=books.filter(b=>b.id!==req.params.id);
    if(books.length<initialLength){
        res.status(204).send();
    }
    else{
        res.status(404).send('Book not found');
    }
    });
    
    app.listen(PORT,()=>{
        console.log('server is running on http://localhost:${PORT}');
    });