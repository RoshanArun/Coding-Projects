
public class main2 <E>{
	@SuppressWarnings("unchecked")
	
	public static void main(String args[]) {
		MyList test = new MyList();
		MyStack stack = new MyStack();
		MyQueue queue = new MyQueue();
		
		Student one = new Student();
		Student two = new Student();
		Student three = new Student();
		Student four = new Student();
		Student five = new Student();
		Student six = new Student();
		Student seven = new Student();
		
		test.insertLast(one);
		test.insertFirst(two);
		test.insertAt(2, four);
		test.insertFirst(five);
		test.insertFirst(six);
		test.insertFirst(seven);
		test.removeFirst();
		test.removeLast();
		test.removeAt(1);
		test.printAll();
		

		queue.enqueue(one);
		queue.enqueue(two);
		queue.enqueue(three);
		queue.enqueue(four);
		queue.dequeue();
		System.out.println(queue.toString());

		
		stack.push(one);
		stack.push(two);
		stack.push(three);
		stack.pop();
		System.out.println(stack.toString());
		
		
	}
}
