<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-copy"></i> 绩效审批 </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-tabs v-model="message">
                <el-tab-pane :label="`待审批(${unread.length})`" name="first">
                    <el-table :data="unread" :show-header="false" style="width: 100%">
                        <el-table-column>
                            <template slot-scope="scope">
                                <span @click="handleEdit(scope.$index)" class="message-title">{{scope.row.title}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="date" width="180"></el-table-column>
                        <el-table-column width="200">
                            <template slot-scope="scope">
                                <div class="button-wrapper">
                                  <el-button size="small" type="danger" @click="handleDel(scope.$index)">拒绝</el-button>
                                  <el-button size="small" type="primary"  @click="handleRead(scope.$index)">同意</el-button>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane :label="`已同意(${read.length})`" name="second">
                    <template v-if="message === 'second'">
                        <el-table :data="read" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template slot-scope="scope">
                                    <span class="message-title">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" width="150"></el-table-column>
                            <el-table-column width="120">
                                <!-- <template slot-scope="scope">
                                    <el-button type="danger" @click="handleDel(scope.$index)">删除</el-button>
                                </template> -->
                            </el-table-column>
                        </el-table>
                    </template>
                </el-tab-pane>
                <el-tab-pane :label="`已拒绝(${recycle.length})`" name="third">
                    <template v-if="message === 'third'">
                        <el-table :data="recycle" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template slot-scope="scope">
                                    <span class="message-title">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" width="150"></el-table-column>
                            <el-table-column width="120">
                                <!-- <template slot-scope="scope">
                                    <el-button @click="handleRestore(scope.$index)">还原</el-button>
                                </template> -->
                            </el-table-column>
                        </el-table>
                    </template>
                </el-tab-pane>
            </el-tabs>
        </div>
        <!-- 编辑弹出框 -->
        <el-dialog title="审批详情" :visible.sync="editVisible" width="30%">
             <!-- <el-form-item label="内容">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item> -->
            <el-steps :active="active" finish-status="success" align-center>
              <el-step title="提交申请"  ></el-step>
              <el-step title="直系领导审批"></el-step>
              <el-step title="完成"></el-step>
          </el-steps>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
            <br>
            <br>
            <p style="font-size: 18px; color:#303133">考核类型</p>
            <br>
            <div style="height:20px; width:25%;border:1px solid rgb(255,255,255);padding-left:2px">项目完成情况</div>
            <br>
            <p style="font-size: 18px; color:#303133">内容</p>
            <br>
            <div style="height:100px;border:1px solid  rgb(255,255,255);padding-left:2px">采购人员采购完毕，货物清点入库</div>
            <br>
            <p style="font-size: 18px; color:#303133">得分</p>
            <br>
            <div style="height:20px;width:25%;border:1px solid  rgb(255,255,255);padding-left:2px ">8</div>
            <br>
            <p style="font-size: 18px; color:#303133">附件</p>
            <br>
           <div style="height:20px;width:50%;border:1px solid rgb(220,223,230);padding-left:2px "><a href="javascript:;"></a></div>
            <br>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'tabs',
        data() {
            return {
                message: 'first',
                editVisible: false,
                active: 1,
                unread: [
                //     {
                //     date: '2018-04-19 20:00:00',
                //     title: 'Xi Xi绩效申请',
                // },
                {
                    date: '2022-05-04 21:00:00',
                    title: '小明绩效申请',
                }],
                read: [{
                    date: '2022-04-29 20:00:00',
                    title: '珊珊绩效申请'
                }],
                recycle: [{
                    date: '2018-04-19 20:00:00',
                    title: '刘鑫绩效申请'
                }]
            }
        },
        methods: {
            handleRead(index) {
                const item = this.unread.splice(index, 1);
                console.log(item);
                this.read = item.concat(this.read);
            },
            handleDel(index) {
                const item = this.unread.splice(index, 1);
                this.recycle = item.concat(this.recycle);
            },
            handleRestore(index) {
                const item = this.recycle.splice(index, 1);
                this.read = item.concat(this.read);
            },
            saveEdit() {
            this.editVisible = false;
            },
            handleEdit(index, row) {
            // this.idx = index;
            // this.form = row;
            this.editVisible = true;
            },
        },
        computed: {
            unreadNum(){
                return this.unread.length;
            }
        }
    }

</script>

<style>
.message-title{
    cursor: pointer;
}
.handle-row{
    margin-top: 30px;
}
.button-wrapper{
  display: flex;
  flex-direction: row;

}
</style>

