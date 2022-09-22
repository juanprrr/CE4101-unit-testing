import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.Test;


public class mayor {

    public static void main(String[] args) {
        
    }

    public static int higher(int x, int y) {
        if (x > y){
            return x;
        }
        else {
            return y;
        }
    }

    @Test
    public void testHigher() {
        assertEquals(25, higher(25, 25));
        assertEquals(5, higher(3, 5));
    }

    
}