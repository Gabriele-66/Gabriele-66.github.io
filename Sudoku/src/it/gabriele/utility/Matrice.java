package it.gabriele.utility;

public class Matrice {
	
	public static void stampa_mod(int[][] m){	//matrice,dim matrice quadrata
		double n=Costanti.SQRTDIM;//ogni quanto formattare
		riga(n);
		System.out.println("");
		for (int i=0;i<m.length;i++){
			for(int j=0;j<m[i].length;j++){
				if(j==0)											System.out.print("|");
				if( m[i][j]==0 )									System.out.print(". ");
				else 												System.out.print(m[i][j]+" ");
				if(j==n-1 || j==n*2-1 || j==n*n-1)					System.out.print("|");
				if(j==n*n-1 && (i==n-1 || i==n*2-1 || i==n*n-1))	System.out.println("");
			}
			if (i==n-1 || i==n*2-1 || i==n*n-1) 					riga(n);
			System.out.println();
		}
	}
	
	
	private static void riga(double n){
		System.out.print(" ");
		for (int i=0;i<n;i++) {
			System.out.print("------");
		}
		System.out.print("-- ");
	}
	
	
	public static boolean verifica(int[][] m, int r, int c,int n) {//vero se numero non trovato; falso se il numero è già presente
		int nr=0,nc=0;
		
		if( r==0 || r==1 || r==2 ) nr=3;
		else if( r==3 || r==4 || r==5 ) nr=6;
			else if( r==6 || r==7 || r==8 ) nr=9;
	
		if( c==0 || c==1 || c==2 ) nc=3;
			else if( c==3 || c==4 || c==5 ) nc=6;
				else if( c==6 || c==7 || c==8 ) nc=9;
		
		for (int i=nr-3;i<nr;i++){		//verifico nella sottomatrice
			for (int j=nc-3;j<nc;j++){
				if( n==m[i][j] ) return false;
			}
		}
		
		for(int i=0;i<m.length;i++) {	//verifico numero su colonna c e riga r totale
			if( n==m[r][i] ) return false;
			else 
				if(  n==m[i][c] ) return false;
		}
		return true;
	}
	
	
	public static void stampa_nor(int[][] m){
		for (int i=0;i<m.length;i++){
			for(int j=0;j<m[i].length;j++)
				System.out.print(m[i][j]+ " ");
			System.out.println("");
		}
	}
}
