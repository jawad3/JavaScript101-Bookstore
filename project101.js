
let book =[[1,'Start with why','Simon Sinek',80.0,13]
          ,[2,'But how do it know','J. Clark Scott',59.9,22]
          ,[3,'Clean Code','Robert Cecil Martin',50.0,5]
          ,[4,'Zero to One','Peter Thiel',45.0,12]
          ,[5,"You don't know JS",'Kyle Simpson',39.9,9]];
let persons =[['Start with why',3000]
          ,['But how do it know',332]]
function is_exist(book,search)
{
for(let i =0;i<book.length;i++)
{
    for(let j =0;j<3;j++)
    {
           if(search==book[i][j])
           {
               return true;
           }
    }
}
}
console.log(is_exist(book,'Kyle Simpson'))
function sell(book,name,numberofbook,balance)
{let exist=true;
    for(let i =0;i<book.length;i++)
    {
        for(let j =0;j<book[i].length;j++)
        {
               if(name==book[i][j])
               {
                   if(numberofbook<=book[i][4])
                   {let cost =numberofbook*book[i][3];
                    console.log("you buy "+numberofbook+" of "+book[i][1]
                   +"\n book cost = "+book[i][3]
                   +"\n your balance = "+balance
                   +"\n your balance after buy "+numberofbook+" book/books = "+(balance-cost)
                   );
                   book[i][4]=book[i][4]-numberofbook;
                   balance=balance-cost
                   console.log("we stil have "+book[i][4]+" books");
                   exist=false;
                   }else{
                       console.log("we do not hava enogh book we just hava "+book[i][4]+" book/books");
                       exist=false;
                   }
                   
               }
        }
        if(exist && i==book.length-1){
            console.log("this book does not exist");
            exist=false;
        } 
    }
}
sell(book,"You don't know JS",2,2200);
