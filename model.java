import java.util.ArrayList; // import the ArrayList class

public class model extends Ux implements Game{
    private int nextPosition;  // nextPosition a 3 valeurs possible B means running A mean falling, C jumps
  
    private double state;
    public model(int up, int right, double speed) {
        super(speed);
        this.nextPosition = speed * up + right
       
        // up = 1 et right = 0 speed =0.33 then each seconds the position of the ninja is incremented 
    }
    

    void refresh(round) {
        if (super.size >= 6)
            this.nextPosition / 2 + 1;
            switch(this.nextPosition) {
                case 1: super.state("Run");
                case 2: super.state("Jump");
                case 3: super.state("Game Over");
            }

    }

   

    public static void main(String[] args) {
        //serve html
    }
}


interface Game {
    void startIfNecessary();

    // This state tells how the plane is
    String state(String); // "Jump or Run"  

}

class Ux implements Game {
    protected Integer size;
    protected ArrayList<Double> position = new ArrayList<Double>(); 
    protected Double speed
    protected Double lastPosition

    protected Ux(double speed) {
        this.size = 0:
        this.position.push(1+speed);
        this.size++;
        this.startIfNecessary()
    }

    protected String startIfNecessary() {
        this.position.push(1);
        this.lastPosition = this.position.get(this.size);
        Boolean c = (this.lastPosition >= this.size);
        if(c) {
            return state("Jump");
        }
        else return state("Run")
    }


    //Dummy function
    protected String state(String action) {
        return action;
    }
    

}