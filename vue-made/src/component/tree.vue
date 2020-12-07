<template>
  <div class="data-scrop-tree">
    <div class="org-tree">
      <div class="title">公司</div>
      <el-tree
        class="data-tree"
        :data="dataOrgTree"
        :props="orgTreeProps"
        highlight-current
        @node-click="handleOrgNodeClick"
      ></el-tree>
    </div>
    <div class="department-tree">
      <div class="title">部门</div>
      <el-tree
        class="data-tree"
        node-key="departmentCode"
        ref="departmentTreeRef"
        default-expand-all
        highlight-current
        :props="departmentTreeProps"
        :data="dataDepartmentTreeArr"
        show-checkbox
        check-strictly
        @check-change="handleCheckChangeDepTree"
      ></el-tree>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    dataDepartmentTree: "",
    dataOrgTree: [{
      
        "parentCode": "200K",
        "orgcode": "200K40",
        "name": "东升物流有限公司",
        "department": {
          "id": 236,
          "orgroot": "200K40",
          "orgcode": "200K40",
          "parentCode": "200K40",
          "departmentCode": "200K40",
          "departmentName": "东升物流有限公司",
          "createTime": 1576482195000,
          "updateTime": 1576482195000,
          "checked": 1,
          "parent": false
        },
        "child": [
          {
            "parentCode": "200K40",
            "orgcode": "200K400M",
            "name": "1我32123",
            "department": {
              "id": 516,
              "orgroot": "200K40",
              "orgcode": "200K400M",
              "parentCode": "200K400M",
              "departmentCode": "200K400M",
              "departmentName": "1我32123",
              "createTime": 1576579699000,
              "updateTime": 1576579699000,
              "checked": 1,
              "child": [
                {
                  "id": 524,
                  "orgroot": "200K40",
                  "orgcode": "200K400M",
                  "parentCode": "200K400M",
                  "departmentCode": "200K400MPH",
                  "departmentName": "刘华·",
                  "createTime": 1576594629000,
                  "updateTime": 1576594629000,
                  "checked": 1,
                  "parent": true
                }
              ],
              "parent": false
            }
          }, {
            "parentCode": "200K40",
            "orgcode": "200K400L",
            "name": "子公司6",
            "department": {
              "id": 506,
              "orgroot": "200K40",
              "orgcode": "200K400L",
              "parentCode": "200K400L",
              "departmentCode": "200K400L",
              "departmentName": "子公司6",
              "createTime": 1576500327000,
              "updateTime": 1576500327000,
              "checked": 1,
              "child": [
                {
                  "id": 507,
                  "orgroot": "200K40",
                  "orgcode": "200K400L",
                  "parentCode": "200K400L",
                  "departmentCode": "200K400LOE",
                  "departmentName": "3123",
                  "createTime": 1576506098000,
                  "updateTime": 1576506098000,
                  "checked": 1,
                  "parent": true
                }, {
                  "id": 508,
                  "orgroot": "200K40",
                  "orgcode": "200K400L",
                  "parentCode": "200K400L",
                  "departmentCode": "200K400LDM",
                  "departmentName": "3123",
                  "createTime": 1576506098000,
                  "updateTime": 1576506098000,
                  "checked": 1,
                  "parent": true
                }, {
                  "id": 509,
                  "orgroot": "200K40",
                  "orgcode": "200K400L",
                  "parentCode": "200K400L",
                  "departmentCode": "200K400LAH",
                  "departmentName": "3123",
                  "createTime": 1576506098000,
                  "updateTime": 1576506098000,
                  "checked": 1,
                  "parent": true
                }, {
                  "id": 517,
                  "orgroot": "200K40",
                  "orgcode": "200K400L",
                  "parentCode": "200K400L",
                  "departmentCode": "200K400LYL",
                  "departmentName": "23123",
                  "createTime": 1576580249000,
                  "updateTime": 1576580249000,
                  "checked": 1,
                  "parent": true
                }
              ],
              "parent": false
            }
          }, {
            "parentCode": "200K40",
            "orgcode": "200K400K",
            "name": "子公司5",
            "department": {
              "id": 483,
              "orgroot": "200K40",
              "orgcode": "200K400K",
              "parentCode": "200K400K",
              "departmentCode": "200K400K",
              "departmentName": "子公司5",
              "createTime": 1576496251000,
              "updateTime": 1576496251000,
              "checked": 1,
              "child": [
                {
                  "id": 484,
                  "orgroot": "200K40",
                  "orgcode": "200K400K",
                  "parentCode": "200K400K",
                  "departmentCode": "200K400KX9",
                  "departmentName": "子公司5子部门",
                  "createTime": 1576565431000,
                  "updateTime": 1576565431000,
                  "checked": 1,
                  "parent": true
                }
              ],
              "parent": false
            },
            "child": [
              {
                "parentCode": "200K400K",
                "orgcode": "200K400K01",
                "name": "子公司5子子公司1",
                "department": {
                  "id": 485,
                  "orgroot": "200K40",
                  "orgcode": "200K400K01",
                  "parentCode": "200K400K01",
                  "departmentCode": "200K400K01",
                  "departmentName": "子公司5子子公司1",
                  "createTime": 1576496286000,
                  "updateTime": 1576496286000,
                  "checked": 1,
                  "child": [
                    {
                      "id": 486,
                      "orgroot": "200K40",
                      "orgcode": "200K400K01",
                      "parentCode": "200K400K01",
                      "departmentCode": "200K400K010T",
                      "departmentName": "子公司5子子公司1子部门1",
                      "createTime": 1576496312000,
                      "updateTime": 1576496312000,
                      "checked": 1,
                      "parent": true
                    }, {
                      "id": 515,
                      "orgroot": "200K40",
                      "orgcode": "200K400K01",
                      "parentCode": "200K400K01",
                      "departmentCode": "200K400K018F",
                      "departmentName": "子公司5子子公司1子部门2",
                      "createTime": 1576573566000,
                      "updateTime": 1576573566000,
                      "checked": 1,
                      "parent": true
                    }, {
                      "id": 518,
                      "orgroot": "200K40",
                      "orgcode": "200K400K01",
                      "parentCode": "200K400K01",
                      "departmentCode": "200K400K01UB",
                      "departmentName": "子公司5子子公司1子部门3",
                      "createTime": 1576583225000,
                      "updateTime": 1576583225000,
                      "checked": 1,
                      "parent": true
                    }, {
                      "id": 519,
                      "orgroot": "200K40",
                      "orgcode": "200K400K01",
                      "parentCode": "200K400K01",
                      "departmentCode": "200K400K011I",
                      "departmentName": "子公司5子子公司1子部门3",
                      "createTime": 1576583225000,
                      "updateTime": 1576583225000,
                      "checked": 1,
                      "parent": true
                    }, {
                      "id": 520,
                      "orgroot": "200K40",
                      "orgcode": "200K400K01",
                      "parentCode": "200K400K01",
                      "departmentCode": "200K400K01GU",
                      "departmentName": "子公司5子子公司1子部门3",
                      "createTime": 1576583225000,
                      "updateTime": 1576583225000,
                      "checked": 1,
                      "parent": true
                    }, {
                      "id": 521,
                      "orgroot": "200K40",
                      "orgcode": "200K400K01",
                      "parentCode": "200K400K01",
                      "departmentCode": "200K400K01NF",
                      "departmentName": "子公司5子子公司1子部门3",
                      "createTime": 1576583225000,
                      "updateTime": 1576583225000,
                      "checked": 1,
                      "parent": true
                    }, {
                      "id": 522,
                      "orgroot": "200K40",
                      "orgcode": "200K400K01",
                      "parentCode": "200K400K01",
                      "departmentCode": "200K400K01KY",
                      "departmentName": "子公司5子子公司1子部门3",
                      "createTime": 1576583225000,
                      "updateTime": 1576583225000,
                      "checked": 1,
                      "parent": true
                    }
                  ],
                  "parent": false
                }
              }
            ]
          }, {
            "parentCode": "200K40",
            "orgcode": "200K400J",
            "name": "子公司4",
            "department": {
              "id": 482,
              "orgroot": "200K40",
              "orgcode": "200K400J",
              "parentCode": "200K400J",
              "departmentCode": "200K400J",
              "departmentName": "子公司4",
              "createTime": 1576496193000,
              "updateTime": 1576496193000,
              "checked": 1,
              "child": [
                {
                  "id": 503,
                  "orgroot": "200K40",
                  "orgcode": "200K400J",
                  "parentCode": "200K400J",
                  "departmentCode": "200K400JAR",
                  "departmentName": "子公司4子部门1",
                  "createTime": 1576500272000,
                  "updateTime": 1576500272000,
                  "checked": 1,
                  "parent": true
                }, {
                  "id": 504,
                  "orgroot": "200K40",
                  "orgcode": "200K400J",
                  "parentCode": "200K400J",
                  "departmentCode": "200K400JBA",
                  "departmentName": "子公司4子部门2",
                  "createTime": 1576500286000,
                  "updateTime": 1576500286000,
                  "checked": 1,
                  "parent": true
                }
              ],
              "parent": false
            }
          }, {
            "parentCode": "200K40",
            "orgcode": "200K400H",
            "name": "子公司3",
            "department": {
              "id": 466,
              "orgroot": "200K40",
              "orgcode": "200K400H",
              "parentCode": "200K400H",
              "departmentCode": "200K400H",
              "departmentName": "子公司3",
              "createTime": 1576487143000,
              "updateTime": 1576487143000,
              "checked": 1,
              "child": [
                {
                  "id": 469,
                  "orgroot": "200K40",
                  "orgcode": "200K400H",
                  "parentCode": "200K400H",
                  "departmentCode": "200K400HHJ",
                  "departmentName": "子公司3子部门1",
                  "createTime": 1576487295000,
                  "updateTime": 1576487295000,
                  "checked": 1,
                  "parent": true
                }, {
                  "id": 473,
                  "orgroot": "200K40",
                  "orgcode": "200K400H",
                  "parentCode": "200K400H",
                  "departmentCode": "200K400H75",
                  "departmentName": "子公司3子部门2",
                  "createTime": 1576488314000,
                  "updateTime": 1576488314000,
                  "checked": 1,
                  "parent": true
                }
              ],
              "parent": false
            }
          }, {
            "parentCode": "200K40",
            "orgcode": "200K400G",
            "name": "子公司2",
            "department": {
              "id": 479,
              "orgroot": "200K40",
              "orgcode": "200K400G",
              "parentCode": "200K400G",
              "departmentCode": "200K400G",
              "departmentName": "子公司2",
              "createTime": 1576494436000,
              "updateTime": 1576494436000,
              "checked": 1,
              "child": [
                {
                  "id": 459,
                  "orgroot": "200K40",
                  "orgcode": "200K400G",
                  "parentCode": "200K400G",
                  "departmentCode": "200K400GRV",
                  "departmentName": "子公司2子部门1",
                  "createTime": 1576486544000,
                  "updateTime": 1576486544000,
                  "checked": 1,
                  "parent": true
                }, {
                  "id": 471,
                  "orgroot": "200K40",
                  "orgcode": "200K400G",
                  "parentCode": "200K400G",
                  "departmentCode": "200K400GUX",
                  "departmentName": "子公司2子部门2",
                  "createTime": 1576487511000,
                  "updateTime": 1576487511000,
                  "checked": 1,
                  "parent": true
                }
              ],
              "parent": false
            }
          }, {
            "parentCode": "200K40",
            "orgcode": "200K400F",
            "name": "子公司1",
            "department": {
              "id": 480,
              "orgroot": "200K40",
              "orgcode": "200K400F",
              "parentCode": "200K400F",
              "departmentCode": "200K400F",
              "departmentName": "子公司1",
              "createTime": 1576494436000,
              "updateTime": 1576494436000,
              "checked": 1,
              "child": [
                {
                  "id": 464,
                  "orgroot": "200K40",
                  "orgcode": "200K400F",
                  "parentCode": "200K400F",
                  "departmentCode": "200K400F7W",
                  "departmentName": "子公司1子部门1",
                  "createTime": 1576486831000,
                  "updateTime": 1576486831000,
                  "checked": 1,
                  "parent": true
                }
              ],
              "parent": false
            },
            "child": [
              {
                "parentCode": "200K400F",
                "orgcode": "200K400F01",
                "name": "子公司1下子公司1",
                "department": {
                  "id": 478,
                  "orgroot": "200K40",
                  "orgcode": "200K400F01",
                  "parentCode": "200K400F01",
                  "departmentCode": "200K400F01",
                  "departmentName": "子公司1下子公司1",
                  "createTime": 1576494436000,
                  "updateTime": 1576494436000,
                  "checked": 1,
                  "parent": false
                }
              }
            ]
          }, {
            "parentCode": "200K40",
            "orgcode": "200K4005",
            "name": "深圳分公司",
            "department": {
              "id": 231,
              "orgroot": "200K40",
              "orgcode": "200K4005",
              "parentCode": "200K4005",
              "departmentCode": "200K4005",
              "departmentName": "东升物流深圳分部",
              "createTime": 1576482195000,
              "updateTime": 1576482195000,
              "checked": 1,
              "parent": false
            },
            "child": [
              {
                "parentCode": "200K4005",
                "orgcode": "200K400502",
                "name": "深圳二公司",
                "department": {
                  "id": 229,
                  "orgroot": "200K40",
                  "orgcode": "200K400502",
                  "parentCode": "200K400502",
                  "departmentCode": "200K400502",
                  "departmentName": "深圳二部",
                  "createTime": 1576482195000,
                  "updateTime": 1576482195000,
                  "checked": 1,
                  "parent": false
                }
              }, {
                "parentCode": "200K4005",
                "orgcode": "200K400501",
                "name": "深圳一公司",
                "department": {
                  "id": 230,
                  "orgroot": "200K40",
                  "orgcode": "200K400501",
                  "parentCode": "200K400501",
                  "departmentCode": "200K400501",
                  "departmentName": "深圳一部",
                  "createTime": 1576482195000,
                  "updateTime": 1576482195000,
                  "checked": 1,
                  "parent": false
                },
                "child": [
                  {
                    "parentCode": "200K400501",
                    "orgcode": "200K40050102",
                    "name": "财务公司",
                    "department": {
                      "id": 225,
                      "orgroot": "200K40",
                      "orgcode": "200K40050102",
                      "parentCode": "200K40050102",
                      "departmentCode": "200K40050102",
                      "departmentName": "财务公司",
                      "createTime": 1576482195000,
                      "updateTime": 1576482195000,
                      "checked": 1,
                      "parent": false
                    }
                  }, {
                    "parentCode": "200K400501",
                    "orgcode": "200K40050101",
                    "name": "管车公司",
                    "department": {
                      "id": 226,
                      "orgroot": "200K40",
                      "orgcode": "200K40050101",
                      "parentCode": "200K40050101",
                      "departmentCode": "200K40050101",
                      "departmentName": "管车公司",
                      "createTime": 1576482195000,
                      "updateTime": 1576482195000,
                      "checked": 1,
                      "parent": false
                    }
                  }
                ]
              }
            ]
          }, {
            "parentCode": "200K40",
            "orgcode": "200K4004",
            "name": "广州分公司",
            "department": {
              "id": 232,
              "orgroot": "200K40",
              "orgcode": "200K4004",
              "parentCode": "200K4004",
              "departmentCode": "200K4004",
              "departmentName": "东升物流广州分部",
              "createTime": 1576482195000,
              "updateTime": 1576482195000,
              "checked": 1,
              "parent": false
            },
            "child": [
              {
                "parentCode": "200K4004",
                "orgcode": "200K400402",
                "name": "广州二部",
                "department": {
                  "id": 227,
                  "orgroot": "200K40",
                  "orgcode": "200K400402",
                  "parentCode": "200K400402",
                  "departmentCode": "200K400402",
                  "departmentName": "广州二部",
                  "createTime": 1576482195000,
                  "updateTime": 1576482195000,
                  "checked": 1,
                  "parent": false
                }
              }, {
                "parentCode": "200K4004",
                "orgcode": "200K400401",
                "name": "广州一部",
                "department": {
                  "id": 228,
                  "orgroot": "200K40",
                  "orgcode": "200K400401",
                  "parentCode": "200K400401",
                  "departmentCode": "200K400401",
                  "departmentName": "广州一部",
                  "createTime": 1576482195000,
                  "updateTime": 1576482195000,
                  "checked": 1,
                  "parent": false
                }
              }
            ]
          }, {
            "parentCode": "200K40",
            "orgcode": "200K4003",
            "name": "天津分公司",
            "department": {
              "id": 233,
              "orgroot": "200K40",
              "orgcode": "200K4003",
              "parentCode": "200K4003",
              "departmentCode": "200K4003",
              "departmentName": "东升物流天津分部",
              "createTime": 1576482195000,
              "updateTime": 1576482195000,
              "checked": 1,
              "parent": false
            }
          }, {
            "parentCode": "200K40",
            "orgcode": "200K4002",
            "name": "上海分公司",
            "department": {
              "id": 234,
              "orgroot": "200K40",
              "orgcode": "200K4002",
              "parentCode": "200K4002",
              "departmentCode": "200K4002",
              "departmentName": "东升物流上海分部",
              "createTime": 1576482195000,
              "updateTime": 1576482195000,
              "checked": 1,
              "parent": false
            }
          }, {
            "parentCode": "200K40",
            "orgcode": "200K4001",
            "name": "北京分公司",
            "department": {
              "id": 235,
              "orgroot": "200K40",
              "orgcode": "200K4001",
              "parentCode": "200K4001",
              "departmentCode": "200K4001",
              "departmentName": "东升物流北京分部",
              "createTime": 1576482195000,
              "updateTime": 1576482195000,
              "checked": 1,
              "parent": false
            }
          }
        ]
      }
    ],
    orgTreeProps: {
      children: "child",
      label: "name"
    },
    departmentTreeProps: {
      children: "child",
      label: "departmentName"
    },
    dataOrigin: ""
  }),
  method:{
      handleOrgNodeClick(d){
          
      }
  }
};
</script>

<style lang="less">
</style>