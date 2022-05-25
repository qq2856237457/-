
/**
 *  总分=业绩考核得分+行为考核得分
  * 工资计算：
  *  基本工资+加班工资+绩效奖金+补贴-五险一金-个人所得税
  */
export const getMoney = function(userInfo) {
  let counter = 0;    // 总分
  let should_pay = 0;   // 实发工资
  let bonus = 0 // 绩效奖金
  let insurance = userInfo.base_pay * 0.151;  // 五险一金
  let individual_income_tax = userInfo.base_pay-insurance-5000; // 税收

  if(userInfo.compassionate_leave <=2 && userInfo.sick_leave <= 2){
    // 若本月请病假记录小于等于2且请事假记录小于等于2，绩效行为考核得30分
    counter= 30;
  }
  counter += userInfo.yeji;

// 总分在0-50分，绩效奖金为基本工资20%，
// 总分在51-70分，绩效奖金为基本工资30%，
// 总分在71-90分，绩效奖金为基本工资35%，
// 总分在91-100分，绩效奖金为基本工资40%，
  if(100 >= counter > 90)
    bonus = userInfo.base_pay * 0.4;
  else if(90 >= counter > 70)
    bonus = userInfo.base_pay * 0.35;
  else if(70 >= counter > 50)
    bonus = userInfo.base_pay * 0.3;
  else
    bonus = userInfo.base_pay *  0.2
  
 should_pay = 
    userInfo.base_pay + 
    userInfo.overtime_pay + 
    userInfo.subsidy +
    bonus -
    insurance -
    individual_income_tax;
  return should_pay;
}