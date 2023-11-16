//1.feladat:

function Counter(){
 this.count = 0;
    this.increment =function()
    {
        this.count++; 
    }
    this.decrement = function()
    {
        this.count--;
    }
    this.reset = function()
    {
        this.count = 0;
    }

    this.getCount = function()
    {
        return this.count;
    }
};

    const counter =  new Counter();
    console.log(counter.getCount());
    counter.increment();
    counter.increment();
    console.log(counter.getCount());

    counter.decrement();
    console.log(counter.getCount());

    counter.reset();
    console.log(counter.getCount());

