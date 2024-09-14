what is backend?
>backend developer is someone that programs server and db.

why backend?
>to make website more usable and purposeful for the audience.
>to make websites dynamic

why not frontend alone?
>with frontend, websites are static and they are not of much use

why do we need?
>nodejs(js runtime enviornment), mongodb, mongoosejs, expressjs etc.

what is npm?
>node package manager
>npm is a place where we get a lot of packages
>package :- bani banayi cheezein / features are called packages
>npm = packages ka playstore | package = files of codes 

node vs express?
>node is the main thing , express ke code se hum server ka code likh pate hain and server kaisa react krega wo bhi express ke help se likhte hain

what is express js?
>-package , routing

why express js?
>http is difficult to use , express makes this easier

routing?
>routes banane ke process ko hum kahte hain routing
>/profile
>/home
>/contact

middleware?
>middleware ek aisa function hota hai jo har route se phle chlta hai, i.e ,iska matlab saare routes mein koi bhi chale usse phle middleware chlta hai and usmein likha code phle execute hota hai

NOTE:-
>>NODE KE SAATH EK DIKKAT HAI KI AGAR CONTROL EK BAAR BHI KISI MIDDLEWARE PAR GYA TOH CONTROL KHUD SE AGLE ROUTE/ MIDDLEWARE PAR NHI JAYEGA, USE AGLE PAR LEJANE KE LIYE AAPKO PUSH KARNA PADEGA AUR YE PUSH KHALAYEGA NEXT KO CHALAANA

request and response?
>req mei saara ddata hota hai aane wale user ki request ki taraf ka, jaise ki uski location , device info and other things, res mein controls hote hai jinke basis par hum server se response bhej paate hai, next is just a push so that our request moves to the next thing which should be execute.

route parameters
>*dynamic_routing*:- aisa koi bhi route jiska koi hissa baar baar same rhata hai and kuch hissa baar baar change hota hai iske liye aap ek dynamic route bana sakte ho
>to make any route dynaic  you can use : at the place where you want to make it dynamic, and access there value use req.params

template engines?
>these gives you html by converting a style of markup. ex:- pug, handlebars, ejs, jade.we are using ejs bcoz it is very similar to html

static files
>images, stylesheets, frontend js setup krna

database
>har naye app ka data store hoga storage mein, par usey directly rakhne ki jagah elk container mei rakhenge , us container mein sirf us app ka data aayeg aur voh container khalayega us app ka database
>models(code) => collectiion(database)
>schema(code) => documents(databse)
>ek app ka pura data => db
>ek app mei variety of data hota hai par poora data app ka hi hai, par us data ka sub category kehlata hai collection
>collection matlab ki bola users ka data , ek user pe baat krri toh hua document


flash messages
>Flash messages are a means of communicating messages to the end user from inside of an application. These messages might be errors, warnings, or success types of messages. Some examples of flash messages are: “You have been successfully logged out.” “Your widget could not be updated.”

data association
>ek model se dusre model ke data ko jod dena id ke through, matlab ki agar aap ke paas ek user hai to woh post banayega hi, jab post banayega to wo user ke dwaara hi bnayega, to hum kya karte hai jab do aise data aapas mei closely related hote hai to hum dono ko jod dete hain, ki ek model ke bane hue data ki id ko dusre model ke data ko dedete hain aur iss model ke data ki id picle model ke data ko dedete hain.

