package it.gabriele.utility;

import java.util.Random;

public class Casuale {

	public static int genera() {
		Random rnd = new Random();
		int n = rnd.nextInt(8);
		return n;
	}
		
	public static int riempimento(int[][] m, int diff) {
		int n,r,c,i=0,x=0;
		while(i<=diff) {
			n=genera()+1;
			r=genera();
			c=genera();
			if(Matrice.verifica(m, r, c, n)==true) {
				m[r][c]=n;
				i++;
			}
			else x++;
		}
		
		return x;
	}
}
