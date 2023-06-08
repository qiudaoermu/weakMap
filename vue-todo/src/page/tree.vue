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
        @check-change="handleCheckChange"
      ></el-tree>
    </div>
    <el-button class="sub-button" @click="submitCheckedDepartment"
      >提交</el-button
    >
  </div>
</template>

<script>
Array.prototype.indexOf = function(val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
  }
  return -1;
};
Array.prototype.remove = function(val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};
export default {
  data: () => ({
    dataDepartmentTree: "",
    dataOrgTree: [
      {
        parentCode: "200K",
        orgcode: "200K40",
        name: "东升物流有限公司",
        department: {
          id: 236,
          orgroot: "200K40",
          orgcode: "200K40",
          parentCode: "200K40",
          departmentCode: "200K40",
          departmentName: "东升物流有限公司",
          createTime: 1576482195000,
          updateTime: 1576482195000,
          checked: 0,
          parent: false
        },
        child: [
          {
            parentCode: "200K40",
            orgcode: "200K400M",
            name: "1我32123",
            department: {
              id: 516,
              orgroot: "200K40",
              orgcode: "200K400M",
              parentCode: "200K400M",
              departmentCode: "200K400M",
              departmentName: "1我32123",
              createTime: 1576579699000,
              updateTime: 1576579699000,
              checked: 0,
              child: [
                {
                  id: 524,
                  orgroot: "200K40",
                  orgcode: "200K400M",
                  parentCode: "200K400M",
                  departmentCode: "200K400MPH",
                  departmentName: "刘华·",
                  createTime: 1576594629000,
                  updateTime: 1576594629000,
                  checked: 0,
                  parent: true
                }
              ],
              parent: false
            }
          },
          {
            parentCode: "200K40",
            orgcode: "200K400L",
            name: "子公司6",
            department: {
              id: 506,
              orgroot: "200K40",
              orgcode: "200K400L",
              parentCode: "200K400L",
              departmentCode: "200K400L",
              departmentName: "子公司6",
              createTime: 1576500327000,
              updateTime: 1576500327000,
              checked: 0,
              child: [
                {
                  id: 507,
                  orgroot: "200K40",
                  orgcode: "200K400L",
                  parentCode: "200K400L",
                  departmentCode: "200K400LOE",
                  departmentName: "3123",
                  createTime: 1576506098000,
                  updateTime: 1576506098000,
                  checked: 0,
                  parent: true
                },
                {
                  id: 508,
                  orgroot: "200K40",
                  orgcode: "200K400L",
                  parentCode: "200K400L",
                  departmentCode: "200K400LDM",
                  departmentName: "3123",
                  createTime: 1576506098000,
                  updateTime: 1576506098000,
                  checked: 0,
                  parent: true
                },
                {
                  id: 509,
                  orgroot: "200K40",
                  orgcode: "200K400L",
                  parentCode: "200K400L",
                  departmentCode: "200K400LAH",
                  departmentName: "3123",
                  createTime: 1576506098000,
                  updateTime: 1576506098000,
                  checked: 0,
                  parent: true
                },
                {
                  id: 517,
                  orgroot: "200K40",
                  orgcode: "200K400L",
                  parentCode: "200K400L",
                  departmentCode: "200K400LYL",
                  departmentName: "23123",
                  createTime: 1576580249000,
                  updateTime: 1576580249000,
                  checked: 0,
                  parent: true
                }
              ],
              parent: false
            }
          },
          {
            parentCode: "200K40",
            orgcode: "200K400K",
            name: "子公司5",
            department: {
              id: 483,
              orgroot: "200K40",
              orgcode: "200K400K",
              parentCode: "200K400K",
              departmentCode: "200K400K",
              departmentName: "子公司5",
              createTime: 1576496251000,
              updateTime: 1576496251000,
              checked: 0,
              child: [
                {
                  id: 484,
                  orgroot: "200K40",
                  orgcode: "200K400K",
                  parentCode: "200K400K",
                  departmentCode: "200K400KX9",
                  departmentName: "子公司5子部门",
                  createTime: 1576565431000,
                  updateTime: 1576565431000,
                  checked: 0,
                  parent: true
                }
              ],
              parent: false
            },
            child: [
              {
                parentCode: "200K400K",
                orgcode: "200K400K01",
                name: "子公司5子子公司1",
                department: {
                  id: 485,
                  orgroot: "200K40",
                  orgcode: "200K400K01",
                  parentCode: "200K400K01",
                  departmentCode: "200K400K01",
                  departmentName: "子公司5子子公司1",
                  createTime: 1576496286000,
                  updateTime: 1576496286000,
                  checked: 0,
                  child: [
                    {
                      id: 486,
                      orgroot: "200K40",
                      orgcode: "200K400K01",
                      parentCode: "200K400K01",
                      departmentCode: "200K400K010T",
                      departmentName: "子公司5子子公司1子部门1",
                      createTime: 1576496312000,
                      updateTime: 1576496312000,
                      checked: 0,
                      parent: true
                    },
                    {
                      id: 515,
                      orgroot: "200K40",
                      orgcode: "200K400K01",
                      parentCode: "200K400K01",
                      departmentCode: "200K400K018F",
                      departmentName: "子公司5子子公司1子部门2",
                      createTime: 1576573566000,
                      updateTime: 1576573566000,
                      checked: 0,
                      parent: true
                    },
                    {
                      id: 518,
                      orgroot: "200K40",
                      orgcode: "200K400K01",
                      parentCode: "200K400K01",
                      departmentCode: "200K400K01UB",
                      departmentName: "子公司5子子公司1子部门3",
                      createTime: 1576583225000,
                      updateTime: 1576583225000,
                      checked: 0,
                      parent: true
                    },
                    {
                      id: 519,
                      orgroot: "200K40",
                      orgcode: "200K400K01",
                      parentCode: "200K400K01",
                      departmentCode: "200K400K011I",
                      departmentName: "子公司5子子公司1子部门3",
                      createTime: 1576583225000,
                      updateTime: 1576583225000,
                      checked: 0,
                      parent: true
                    },
                    {
                      id: 520,
                      orgroot: "200K40",
                      orgcode: "200K400K01",
                      parentCode: "200K400K01",
                      departmentCode: "200K400K01GU",
                      departmentName: "子公司5子子公司1子部门3",
                      createTime: 1576583225000,
                      updateTime: 1576583225000,
                      checked: 0,
                      parent: true
                    },
                    {
                      id: 521,
                      orgroot: "200K40",
                      orgcode: "200K400K01",
                      parentCode: "200K400K01",
                      departmentCode: "200K400K01NF",
                      departmentName: "子公司5子子公司1子部门3",
                      createTime: 1576583225000,
                      updateTime: 1576583225000,
                      checked: 0,
                      parent: true
                    },
                    {
                      id: 522,
                      orgroot: "200K40",
                      orgcode: "200K400K01",
                      parentCode: "200K400K01",
                      departmentCode: "200K400K01KY",
                      departmentName: "子公司5子子公司1子部门3",
                      createTime: 1576583225000,
                      updateTime: 1576583225000,
                      checked: 0,
                      parent: true
                    }
                  ],
                  parent: false
                }
              }
            ]
          },
          {
            parentCode: "200K40",
            orgcode: "200K400J",
            name: "子公司4",
            department: {
              id: 482,
              orgroot: "200K40",
              orgcode: "200K400J",
              parentCode: "200K400J",
              departmentCode: "200K400J",
              departmentName: "子公司4",
              createTime: 1576496193000,
              updateTime: 1576496193000,
              checked: 0,
              child: [
                {
                  id: 503,
                  orgroot: "200K40",
                  orgcode: "200K400J",
                  parentCode: "200K400J",
                  departmentCode: "200K400JAR",
                  departmentName: "子公司4子部门1",
                  createTime: 1576500272000,
                  updateTime: 1576500272000,
                  checked: 0,
                  parent: true
                },
                {
                  id: 504,
                  orgroot: "200K40",
                  orgcode: "200K400J",
                  parentCode: "200K400J",
                  departmentCode: "200K400JBA",
                  departmentName: "子公司4子部门2",
                  createTime: 1576500286000,
                  updateTime: 1576500286000,
                  checked: 0,
                  parent: true
                }
              ],
              parent: false
            }
          },
          {
            parentCode: "200K40",
            orgcode: "200K400H",
            name: "子公司3",
            department: {
              id: 466,
              orgroot: "200K40",
              orgcode: "200K400H",
              parentCode: "200K400H",
              departmentCode: "200K400H",
              departmentName: "子公司3",
              createTime: 1576487143000,
              updateTime: 1576487143000,
              checked: 0,
              child: [
                {
                  id: 469,
                  orgroot: "200K40",
                  orgcode: "200K400H",
                  parentCode: "200K400H",
                  departmentCode: "200K400HHJ",
                  departmentName: "子公司3子部门1",
                  createTime: 1576487295000,
                  updateTime: 1576487295000,
                  checked: 0,
                  parent: true
                },
                {
                  id: 473,
                  orgroot: "200K40",
                  orgcode: "200K400H",
                  parentCode: "200K400H",
                  departmentCode: "200K400H75",
                  departmentName: "子公司3子部门2",
                  createTime: 1576488314000,
                  updateTime: 1576488314000,
                  checked: 0,
                  parent: true
                }
              ],
              parent: false
            }
          },
          {
            parentCode: "200K40",
            orgcode: "200K400G",
            name: "子公司2",
            department: {
              id: 479,
              orgroot: "200K40",
              orgcode: "200K400G",
              parentCode: "200K400G",
              departmentCode: "200K400G",
              departmentName: "子公司2",
              createTime: 1576494436000,
              updateTime: 1576494436000,
              checked: 0,
              child: [
                {
                  id: 459,
                  orgroot: "200K40",
                  orgcode: "200K400G",
                  parentCode: "200K400G",
                  departmentCode: "200K400GRV",
                  departmentName: "子公司2子部门1",
                  createTime: 1576486544000,
                  updateTime: 1576486544000,
                  checked: 0,
                  parent: true
                },
                {
                  id: 471,
                  orgroot: "200K40",
                  orgcode: "200K400G",
                  parentCode: "200K400G",
                  departmentCode: "200K400GUX",
                  departmentName: "子公司2子部门2",
                  createTime: 1576487511000,
                  updateTime: 1576487511000,
                  checked: 0,
                  parent: true
                }
              ],
              parent: false
            }
          },
          {
            parentCode: "200K40",
            orgcode: "200K400F",
            name: "子公司1",
            department: {
              id: 480,
              orgroot: "200K40",
              orgcode: "200K400F",
              parentCode: "200K400F",
              departmentCode: "200K400F",
              departmentName: "子公司1",
              createTime: 1576494436000,
              updateTime: 1576494436000,
              checked: 0,
              child: [
                {
                  id: 464,
                  orgroot: "200K40",
                  orgcode: "200K400F",
                  parentCode: "200K400F",
                  departmentCode: "200K400F7W",
                  departmentName: "子公司1子部门1",
                  createTime: 1576486831000,
                  updateTime: 1576486831000,
                  checked: 0,
                  parent: true
                }
              ],
              parent: false
            },
            child: [
              {
                parentCode: "200K400F",
                orgcode: "200K400F01",
                name: "子公司1下子公司1",
                department: {
                  id: 478,
                  orgroot: "200K40",
                  orgcode: "200K400F01",
                  parentCode: "200K400F01",
                  departmentCode: "200K400F01",
                  departmentName: "子公司1下子公司1",
                  createTime: 1576494436000,
                  updateTime: 1576494436000,
                  checked: 0,
                  parent: false
                }
              }
            ]
          },
          {
            parentCode: "200K40",
            orgcode: "200K4005",
            name: "深圳分公司",
            department: {
              id: 231,
              orgroot: "200K40",
              orgcode: "200K4005",
              parentCode: "200K4005",
              departmentCode: "200K4005",
              departmentName: "东升物流深圳分部",
              createTime: 1576482195000,
              updateTime: 1576482195000,
              checked: 0,
              parent: false
            },
            child: [
              {
                parentCode: "200K4005",
                orgcode: "200K400502",
                name: "深圳二公司",
                department: {
                  id: 229,
                  orgroot: "200K40",
                  orgcode: "200K400502",
                  parentCode: "200K400502",
                  departmentCode: "200K400502",
                  departmentName: "深圳二部",
                  createTime: 1576482195000,
                  updateTime: 1576482195000,
                  checked: 0,
                  parent: false
                }
              },
              {
                parentCode: "200K4005",
                orgcode: "200K400501",
                name: "深圳一公司",
                department: {
                  id: 230,
                  orgroot: "200K40",
                  orgcode: "200K400501",
                  parentCode: "200K400501",
                  departmentCode: "200K400501",
                  departmentName: "深圳一部",
                  createTime: 1576482195000,
                  updateTime: 1576482195000,
                  checked: 0,
                  parent: false
                },
                child: [
                  {
                    parentCode: "200K400501",
                    orgcode: "200K40050102",
                    name: "财务公司",
                    department: {
                      id: 225,
                      orgroot: "200K40",
                      orgcode: "200K40050102",
                      parentCode: "200K40050102",
                      departmentCode: "200K40050102",
                      departmentName: "财务公司",
                      createTime: 1576482195000,
                      updateTime: 1576482195000,
                      checked: 0,
                      parent: false
                    }
                  },
                  {
                    parentCode: "200K400501",
                    orgcode: "200K40050101",
                    name: "管车公司",
                    department: {
                      id: 226,
                      orgroot: "200K40",
                      orgcode: "200K40050101",
                      parentCode: "200K40050101",
                      departmentCode: "200K40050101",
                      departmentName: "管车公司",
                      createTime: 1576482195000,
                      updateTime: 1576482195000,
                      checked: 0,
                      parent: false
                    }
                  }
                ]
              }
            ]
          },
          {
            parentCode: "200K40",
            orgcode: "200K4004",
            name: "广州分公司",
            department: {
              id: 232,
              orgroot: "200K40",
              orgcode: "200K4004",
              parentCode: "200K4004",
              departmentCode: "200K4004",
              departmentName: "东升物流广州分部",
              createTime: 1576482195000,
              updateTime: 1576482195000,
              checked: 0,
              parent: false
            },
            child: [
              {
                parentCode: "200K4004",
                orgcode: "200K400402",
                name: "广州二部",
                department: {
                  id: 227,
                  orgroot: "200K40",
                  orgcode: "200K400402",
                  parentCode: "200K400402",
                  departmentCode: "200K400402",
                  departmentName: "广州二部",
                  createTime: 1576482195000,
                  updateTime: 1576482195000,
                  checked: 0,
                  parent: false
                }
              },
              {
                parentCode: "200K4004",
                orgcode: "200K400401",
                name: "广州一部",
                department: {
                  id: 228,
                  orgroot: "200K40",
                  orgcode: "200K400401",
                  parentCode: "200K400401",
                  departmentCode: "200K400401",
                  departmentName: "广州一部",
                  createTime: 1576482195000,
                  updateTime: 1576482195000,
                  checked: 0,
                  parent: false
                }
              }
            ]
          },
          {
            parentCode: "200K40",
            orgcode: "200K4003",
            name: "天津分公司",
            department: {
              id: 233,
              orgroot: "200K40",
              orgcode: "200K4003",
              parentCode: "200K4003",
              departmentCode: "200K4003",
              departmentName: "东升物流天津分部",
              createTime: 1576482195000,
              updateTime: 1576482195000,
              checked: 0,
              parent: false
            }
          },
          {
            parentCode: "200K40",
            orgcode: "200K4002",
            name: "上海分公司",
            department: {
              id: 234,
              orgroot: "200K40",
              orgcode: "200K4002",
              parentCode: "200K4002",
              departmentCode: "200K4002",
              departmentName: "东升物流上海分部",
              createTime: 1576482195000,
              updateTime: 1576482195000,
              checked: 0,
              parent: false
            }
          },
          {
            parentCode: "200K40",
            orgcode: "200K4001",
            name: "北京分公司",
            department: {
              id: 235,
              orgroot: "200K40",
              orgcode: "200K4001",
              parentCode: "200K4001",
              departmentCode: "200K4001",
              departmentName: "东升物流北京分部",
              createTime: 1576482195000,
              updateTime: 1576482195000,
              checked: 0,
              parent: false
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
    dataOrigin: "",
    checkedArr: []
  }),
  computed: {
    dataDepartmentTreeArr() {
      return [this.dataDepartmentTree];
    }
  },
  methods: {
    handleOrgNodeClick(d) {
      this.dataDepartmentTree = d.department;
      this.showDepCheckedBoxs();
    },

    handleCheckChange(d, checked, imdete) {
      // 反选从数组中删除
      var data = [this.dataDepartmentTree];
      if (checked) {
        d.checked = 1;
        this.checkedArr.push(d.departmentCode);
        // this.setCheckedStatus(data, d.departmentCode,1);
      } else {
        this.checkedArr.remove(d.departmentCode);
        d.checked = 0;
        // this.setCheckedStatus(data, d.departmentCode,0);
      }
      console.log(this.dataDepartmentTree);
      console.log(this.checkedArr);
    },
    // 第一种便利
    setCheckedStatus(tree, departmentCode, status) {
      var retNode = null;
      function deepSearch(tree, departmentCode) {
        for (var i = 0; i < tree.length; i++) {
          if (tree[i].child && tree[i].child.length > 0) {
            deepSearch(tree[i].child, departmentCode);
          }
          if (departmentCode === tree[i].departmentCode) {
            retNode = tree[i];
            break;
          }
        }
      }
      deepSearch(tree, departmentCode);
      retNode.checked = status;
      console.log(retNode);
      console.log(this.dataOrgTree);
      return retNode;
    },
    showDepCheckedBoxs() {
      this.currentNodesKeys = this.getUpdatedCheckedBox();
      if (this.currentNodesKeys.length < 1) {
        this.$refs.departmentTreeRef.setCheckedKeys([]);
      } else {
        this.$refs.departmentTreeRef.setCheckedKeys(this.currentNodesKeys);
      }
    },
    // 返回update接口返回的checkedbox
    getUpdatedCheckedBox() {
      let c = [this.dataDepartmentTree];
      let departmentCodes = this.getCheckedOne(c);
      return departmentCodes;
    },
    // 第二种便利
    getCheckedOne(tree) {
      let arr = [];
      for (var i = 0; i < tree.length; i++) {
        if (tree[i].checked == 1) {
          arr.push(tree[i].departmentCode);
        }
        if (tree[i].child && tree[i].child.length >= 1) {
          arr = [...this.getCheckedOne(tree[i].child), ...arr];
        }
      }
      return arr;
    },
    getChild(tree) {
      let arr = [];
      for (var i = 0; i < tree.length; i++) {
        if (!tree[i].child || tree[i].department) {
          arr.push(tree[i]);
        }
        if (tree[i].child && tree[i].child.length >= 1) {
          arr = [...this.getChild(tree[i].child), ...arr];
        }
      }
      return arr;
    },
    // 第三种便利
    getCheckedItem(tree) {
      let arr = [];
      if (!tree.child) {
        if (tree.checked) {
          arr.push(tree.departmentName);
        }
      } else {
        if (tree.checked) {
          arr.push(tree.departmentName);
        }
        for (var i = 0; i < tree.child.length; i++) {
          if (tree.child[i]) {
            arr = [...this.getCheckedItem(tree.child[i]), ...arr];
          }
        }
      }
      return arr;
    },
    submitCheckedDepartment() {
      const de = this.getChild(this.dataOrgTree);
      console.log(de);
      let checkedArr = [];
      de.forEach(item => {
        checkedArr = checkedArr.concat(this.getCheckedItem(item.department));
      });
      console.log(checkedArr);
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .el-tree-node__content {
  background:red
}
.data-scrop-tree {
  display: flex;
  margin-top: 10px;

  .org-tree {
    .data-tree {
      border: 1px solid #cfd8e8;
      border-top: none;
    }

    width: 377px;

    .title {
      background: #f6f8fe;
      border-radius: 2px 2px 0 0;
      height: 39px;
      line-height: 39px;
      font-family: PingFangSC-Semibold;
      font-size: 12px;
      border: 1px solid #cfd8e8;
      text-indent: 19px;
      color: #091a36;
    }
  }

  .department-tree {
    .data-tree {
      border: 1px solid #cfd8e8;
      border-top: none;
    }

    width: 377px;
    margin-left: 10px;

    .title {
      text-indent: 19px;
      background: #f6f8fe;
      border-radius: 2px 2px 0 0;
      height: 39px;
      line-height: 39px;
      font-family: PingFangSC-Semibold;
      font-size: 12px;
      border: 1px solid #cfd8e8;
      color: #091a36;
    }
  }

  .sub-button {
    position: fixed;
    bottom: 20%;
    left: 10%;
  }
}
</style>
