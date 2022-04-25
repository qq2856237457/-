<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 工资查询
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-select v-model="query.address" placeholder="项目类型" class="handle-select mr10">
                    <el-option key="1" label="广东省" value="广东省"></el-option>
                    <el-option key="2" label="湖南省" value="湖南省"></el-option>
                </el-select>
                <el-input v-model="query.name" placeholder="项目名称" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
            </div>
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="id" label="序号" width="55" align="center"></el-table-column>
                <el-table-column label="姓名">
                    <template>{{userName}}</template>
                </el-table-column>
                <el-table-column prop="part" label="部门" ></el-table-column>
                <el-table-column prop="level" label="岗位名称"></el-table-column>
                <el-table-column prop="month" label="核算月份"></el-table-column>
                <el-table-column label="应发工资">
                    <template slot-scope="scope">￥{{scope.row.beforeMoney}}</template>
                </el-table-column>
                <el-table-column label="实发工资">
                    <template slot-scope="scope">￥{{scope.row.afterMoney}}</template>
                </el-table-column>
                
                <el-table-column label="核算状态" align="center">
                    <template slot-scope="scope">
                        <el-tag
                            :type="scope.row.state==='已入账'?'success':(scope.row.state==='未入账'?'danger':'')"
                        >{{scope.row.state}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="date" label="创建时间"></el-table-column>
                <el-table-column label="操作" width="100" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row)"
                        >查看详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                    background
                    layout="total, prev, pager, next"
                    :current-page="query.pageIndex"
                    :page-size="query.pageSize"
                    :total="pageTotal"
                    @current-change="handlePageChange"
                ></el-pagination>
            </div>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="工资单详情" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="出勤天数 :">
                    {{ moneyDetail.workDay  }}
                </el-form-item>
                <el-form-item label="加班天数 :">
                    {{ moneyDetail.addWorkDay  }}
                </el-form-item>
                <el-form-item label="基本工资 :">
                    {{ moneyDetail.baseMoney  }}
                </el-form-item>
                <el-form-item label="加班工资 :">
                    {{ moneyDetail.addWorkDayMoney  }}
                </el-form-item>
                <el-form-item label="社保 :">
                    {{ moneyDetail.social  }}
                </el-form-item>
                <el-form-item label="五险一金 :">
                    {{ moneyDetail.insurance  }}
                </el-form-item>
                <el-form-item label="个人所得税 :">
                    {{ moneyDetail.psersonTax  }}
                </el-form-item>
                <el-form-item label="应发工资 :">
                    {{ moneyDetail.beforeMoney  }}
                </el-form-item>
                <el-form-item label="实发工资 :">
                    {{ moneyDetail.aftereMoney  }}
                </el-form-item>
                
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { fetchData } from '../../api/index';
export default {
    name: 'basetable',
    data() {
        return {
            query: {
                address: '',
                name: '',
                pageIndex: 1,
                pageSize: 10
            },
            moneyDetail: {
                baseMoney: 6700.00,  // 基本工资
                workDay: 22, // 出勤天数
                addWorkDay: 2.5, // 加班天数
                addWorkDayMoney: 700.34, // 加班工资
                social: 123.23, // 社保
                insurance: 340.23, // 五险一金
                psersonTax: 654.98, // 个人所得税
                beforeMoney: 6789.87, // 应发工资
                aftereMoney: 6344.36 // 实发工资

            },
            userName: localStorage.getItem('ms_username'),
            tableData: [],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            pageTotal: 0,
            form: {},
            idx: -1,
            id: -1
        };
    },
    created() {
        this.getData();
    },
    methods: {
        // 获取 easy-mock 的模拟数据
        getData() {
            fetchData({url: './mock/money.json',...this.query}).then(res => {
                console.log(res.list);
                this.tableData = res.list;
                this.pageTotal = res.pageTotal || 50;
            });
        },
        // 触发搜索按钮
        handleSearch() {
            this.$set(this.query, 'pageIndex', 1);
            this.getData();
        },
        // 删除操作
        handleDelete(index, row) {
            // 二次确认删除
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    this.$message.success('删除成功');
                    this.tableData.splice(index, 1);
                })
                .catch(() => {});
        },
        // 多选操作
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        delAllSelection() {
            const length = this.multipleSelection.length;
            let str = '';
            this.delList = this.delList.concat(this.multipleSelection);
            for (let i = 0; i < length; i++) {
                str += this.multipleSelection[i].name + ' ';
            }
            this.$message.error(`删除了${str}`);
            this.multipleSelection = [];
        },
        // 编辑操作
        handleEdit(index, row) {
            this.idx = index;
            this.form = row;
            this.editVisible = true;
        },
        // 保存编辑
        saveEdit() {
            this.editVisible = false;
            this.$message.success(`修改第 ${this.idx + 1} 行成功`);
            this.$set(this.tableData, this.idx, this.form);
        },
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
            this.getData();
        }
    }
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}

</style>
