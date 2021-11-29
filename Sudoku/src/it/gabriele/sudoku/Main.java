package it.gabriele.sudoku;

import it.gabriele.utility.Matrice;
import it.gabriele.utility.Casuale;
import it.gabriele.utility.Costanti;
import java.util.Random;

public class Main {
	public static void main(String[] args) {
		
		int[][] matrix = new int[Costanti.DIM][Costanti.DIM];
		int a =Casuale.riempimento(matrix, 81);
		Matrice.stampa_mod(matrix);	
		System.out.println(a);
		
	}
}

