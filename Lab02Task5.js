class Node
{
    constructor(data) {
        this.data=data;
        this.next=null;
    }

}

class LinkedList
{
    constructor()
    {
        this.head=null;
        this.tail=null;
        this.size=0;
    }

    
    insert(data)
    {
        let n=new Node(data);
        let currentNode;

        if(this.head==null)
        {
            this.head=n;
            this.tail=this.head.next;
        }

        else
        {
            currentNode=this.head;
          
          while(currentNode.next!=null)
          {
            currentNode=currentNode.next;
          }

            currentNode.next=n;
            this.tail=currentNode.next;
        }

        this.size++;
    }

    margeNList(arrList)
    {
        let newList=new LinkedList;
        for(let i=0;i<arrList.length;i++)
        {
            let currentNode=arrList[i].head;

            while(currentNode!=null)
            {
                newList.insert(currentNode.data);
                currentNode=currentNode.next;
            }
        }

        newList.sortList(newList);
        
        return newList;
    }    

    swapData(node1,node2)
    {
        let temp=node1.data;
        node1.data=node2.data;
        node2.data=temp;

    }

    sortList(list)
    {
        let currentNode1=list.head;
        let currentNode2=list.head.next;
        while(currentNode1!=null)
        {
            currentNode2=currentNode1.next;
            while(currentNode2!=null)
            {
                if(currentNode1.data>currentNode2.data)
                {
                    list.swapData(currentNode1,currentNode2);
                }
                currentNode2=currentNode2.next;
            }
            currentNode1=currentNode1.next;
            
        }

        return list;
    }

    display(list)
    {
        let currentNode=list.head;
        while(currentNode!=null)
        {
            console.log(currentNode.data,"->");
            currentNode=currentNode.next;
        }

        console.log(currentNode);
        console.log("\n",list.size);
    }
}



let list1=new LinkedList();
list1.insert(5);
list1.insert(2);
list1.insert(3);
list1.insert(4);
list1.insert(6);
list1.insert(10);
list1.insert(4547);
list1.insert(459);
list1.insert(845);
list1.insert(120);

let list3=new LinkedList();
list3.insert(1);
list3.insert(4);
list3.insert(8);
list3.insert(10);
list3.insert(11);
list3.insert(12);


let list2=new LinkedList();
list2.insert(19);
list2.insert(5);
list2.insert(83);
list2.insert(15);
list2.insert(11);
list2.insert(12);

let list4=new LinkedList();
list4.insert(13);
list4.insert(14);
list4.insert(18);
list4.insert(10);
list4.insert(11);
list4.insert(12);

let arrList=new Array(4);
arrList[0]=list1;
arrList[1]=list2;
arrList[2]=list3;
arrList[3]=list4;


list1.display(list1.margeNList(arrList));
