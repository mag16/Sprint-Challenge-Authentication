<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

requests are first handled by Middleware and then pass the request to the route handler and can do things to help the handle out like check for validation.


2.  What does bcrypt do in order to prevent attacks?
Todays best defense is to increase the "cost" of processing time.  The best way to do that is to use the algorithm called "bcrypt" to generate very costly hashes to the attacker, remaining resistant to brute force search attacks.    

3.  What are the three parts of the JSON Web Token?
A json web token consists of the Header(x),Payload(y) and Signature (z) and looks like (xxxxx.yyyyy.zzzzz).  Header consist of the kind of token it is (jwt) and the hashing algorithm it uses.  The payload consists of the claims (registered, public and private) and the signature verifys the message wasnt changed along the way and also verifys who the sender of the jwt is who it says it is.
