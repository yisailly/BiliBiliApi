# 获取用户代表作视频列表

**必选参数** : `mid` : 用户mid

**接口地址** : `/get/masterpiece`

**可选参数** : `无`

**调用例子** : `/get/masterpiece`

**说明** : 无

**响应说明** :

根对象：

| 字段      | 类型    | 内容    | 备注                  |
|---------|-------|-------|---------------------|
| code    | num   | 返回值   | 0：成功<br />-400：请求错误 |
| message | str   | 错误信息  | 默认为0                |
| ttl     | num   | 1     |                     |
| data    | array | 代表作列表 |                     |

`data`数组：

| 项   | 类型  | 内容   | 备注               |
|-----|-----|------|------------------|
| 0   | obj | 代表作1 | 无则为空             |
| 1   | obj | 代表作2 | 无则为空             |
| 2   | obj | 代表作3 | 无则为空<br />最多设置3个 |

`data`数组中的对象：

同[获取用户置顶视频](/api/get_top_video)中的`data`对象