// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: `
    #include<stdio.h>
    int main() 
    { 
     char *ptr = "QuizApp"; 
     printf("%cn", *&*&*ptr); 
     return 0; 
    }
    `,
    answer: "Q",
    options: [
      "Compiler Error",
      "Garbage Value",
      "Run Time Error",
      "Q"
    ]
  },
    {
    numb: 2,
    question: `
            #include
            using namespace std;
            void square (int *x)
            {
            *x = (*x)++ * (*x);
            }
            void square (int *x, int *y)
            {
            *x = (*x) * --(*y);
            }
            int main ( )
            {
            int number = 30;
            square(&number, &number);
            cout << number;
            return 0;
            }
    `,
    answer: "870",
    options: [
      "910",
      "920",
      "870",
      "900"
    ]
  },
    {
    numb: 3,
    question: `
    public class Test
    {
      public static void main(String[] args)
      {
        int value = 3, sum = 6 + -- value;
        
        int data = --value + ++value / sum++ * value++ + ++sum % value--;
        System.out.println(data);
      }
    }
    
    `,
    answer: "2",
    options: [
      "3",
      "1",
      "2",
      "0"
    ]
  },
    {
    numb: 4,
    question: `
        x = 'abcd'
        for i in range(len(x)):
            print(i)
    `,
    answer: "0123",
    options: [
      "error",
      "abcd",
      "1234",
      "0123"
    ]
  },
    {
    numb: 5,
    question: "Which of the followings are mostly used metrics and tools to assess a classification model?",
    answer: "All the above",
    options: [
      "Confusion Matrix",
      "Cost sensitive accuracy",
      "Area under ROC curve",
      "All the above"
    ]
  },
];