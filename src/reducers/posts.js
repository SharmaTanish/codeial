// import { UPDATE_POSTS } from "../actions/posts";

export default function posts(state=[],action){  // good to give initial default state as if in case state passes undefined type then our program not throw error and consider default state
    switch(action.type){
    case "UPDATE_POSTS":
        return action.posts; // THIS WILL BE NOW NEW STATE
    default:
        return state;
    }
}




// import java.util.Scanner;
// import java.util.*;


//     class Pair{
//         int max_topics;
//         int max_teams;
//     }

// public class Main {
	
    
//     public static Pair maxTopicsTeam(String[] arr){
//         int[] out_arr = new int[(arr.length*(arr.length-1))/2];
//         int index=0;
//         for(int i=0;i<arr.length;i++){
// 			for(int j=i+1;j<arr.length;j++){
//                 int count=0;
//                         System.out.println(arr[i]);

//                 for(int q=0;q<arr[0].length();q++){
//                             System.out.println(arr[i].charAt(q));

//                     if(arr[i].charAt(q)=='1'){
//                         count++;
                        
//                     }
//                     else {   
//                         if(arr[j].charAt(q)=='1'){
//                             count++;
//                         }
//                     }
                   
//                 }
//                  out_arr[index]=count;
//                     index++;
//             }
          
                  
//         }
        
//           int max_topics=-10000;
//             int max_topics_count=0;
//             for(int a=0;a<out_arr.length;a++){
//                 if(out_arr[a]>max_topics){
//                     max_topics=out_arr[a];
//                 }
//             }
//              for(int a=0;a<out_arr.length;a++){
                 
//                 if(out_arr[a]==max_topics){
//                     max_topics_count++;
//                 }
//             }
            
//         System.out.println(Arrays.toString(out_arr));
        
        
//         Pair obj = new Pair();
//         obj.max_topics=max_topics;
//         obj.max_teams = max_topics_count;
//         return obj;
//     }
	
// 	public static void main(String[] args) {
// 		/* Your class should be named Main.
//  			* Read input as specified in the question.
//  			* Print output as specified in the question.
// 		*/

// 		// Write your code here
        
//         Scanner s = new Scanner(System.in);
//         int students = s.nextInt();
//         int topics = s.nextInt();
        
//         String arr[] = new String[students];
//         for(int i=0;i<students;i++){
//             arr[i]=s.nextLine();
//         }
        
//         Pair obj = maxTopicsTeam(arr);
        
//         System.out.println(obj.max_topics);
//         System.out.println(obj.max_teams);

// 	}

// }















// import java.io.*; // for handling input/output
// import java.util.*; // contains Collections framework

// // don't change the name of this class
// // you can add inner classes if needed
// class Main {
// 	public static void main (String[] args) {
//         Scanner s = new Scanner(System.in);
//         int t= s.nextInt();
//         while(t>0){
//             int n= s.nextInt();
//             int k=s.nextInt();
//             int[] arr = new int[n];
//             for(int i=0;i<n;i++){
//                 arr[i]=s.nextInt();
//             }

//             int index=0;
//             int min_steps=0;
//             while(index<n){
//                 int count=0;
//                 for(int j=index;j<n-1;j++){
//                     if(arr[j]==arr[j+1]){
//                         count++;
//                     }
                    
//                 }
//                 if(count>k){
//                     index=index+count+1;
//                     min_steps++;
//                 }
//                 else{
//                     index=index+k;
//                     min_steps++;
//                 }
//             }
//             System.out.println(min_steps);
//             t--;
//         }
// 	}
// }