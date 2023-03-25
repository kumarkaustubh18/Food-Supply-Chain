import java.util.*;

class TestGenerics2{

public static void main(String args[]){ Map<Integer,String> map=new HashMap<Integer, String>C

map.put(1,"keyboard"); map.put(4,"desktop");

map.put(3,"cpu");

map.put(2, "mouse");

Set<Map Entry<Integer, String>> set=map.entrySet();
Iterator<Map Entry<Integer,String>> itr=set.iterator(); 
while (itr.hasNext()){

Map Entry e=itr.next();//no need to typecast

System.out.println(e.getValue());

}

}}