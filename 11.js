1：事件绑定形式闭包
2：


对于一个固定不变的二维数组，
给出两个坐标的位置，实现一个方法foo，
要求计算两个坐标确定的矩阵差集
的所有数字之和。

比如：
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
foo(1, 1, 0, 0) = 2 + 4 + 5 = 11
foo(2, 2, 1, 1) = 3 + 6 + 7 + 8 + 9 = 33



Note:
1) 该方法需要被频繁调用，
可能会需要有每秒数万次调用，
所以尽可能的优化这个方法的效率
2) 该数组在整个计算过程中不会变化
3）时间复杂度（整体上）: O(1)
空间复杂度: O(n * m)

