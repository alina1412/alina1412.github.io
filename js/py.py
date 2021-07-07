import heapq
# listForTree = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]    
# x = heapq.heapify(listForTree)             # for a min heap
# maxheap = heapq._heapify_max(listForTree)        # for a maxheap!!


# print(heapq._heappop_max(x))
# li = [5, 7, 9, 1, 3]
li = []
# using heapify to convert list into heap
# heapq.heapify(li)
  
# printing created heap
# print ("The created heap is : ",end="")
# print (list(li))
  
# using heappush() to push elements into heap
# pushes 4
# heapq.heappush(li,4)
  
# # printing modified heap
# print ("The modified heap after push is : ",end="")
# print (list(li))
  
# # using heappop() to pop smallest element
# print ("The popped and smallest element is : ",end="")
# import heapq
heapq.heapify(li)
for i in range(3):
    heapq.heappush(li,4)
for i in range(3):
    if li:
        print(heapq.heappop(li))