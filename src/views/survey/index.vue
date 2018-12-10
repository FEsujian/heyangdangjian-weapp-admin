<template>
  <div class="app-container" style="text-align:center">
    <tinymce :height="300" v-model="content"/>
    <el-button type="primary" style="margin:10px;">保 存</el-button>
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
export default {
  components: {
    Tinymce
  },
  data() {
    return {
      content: `<p style="font-weight: 400;">2018年，中共合阳县委紧紧围绕全面从严治党要求，深入贯彻落实党的十九大和习近平总书记新时代中国特色社会主义思想精神，聚焦党建主业，主动担当作为，凝聚广泛力量，奋力追赶超越，以新作为奋力开创组织工作新局面。</p>
<p style="font-weight: 400;">聚焦主业，夯实责任，持续筑牢理想信念根基</p>
<p style="font-weight: 400;">&mdash;&mdash;坚持把党的政治建设放在首位，深入推进&ldquo;两学一做&rdquo;学习教育常态化制度化，扎实开展&ldquo;三创三增&rdquo;&ldquo;三比三争&rdquo;教育活动，广大党员自觉用党章党规和系列讲话武装头脑，主动到烈士陵园、杨荫东故居接受红色教育，牢固树立&ldquo;不忘初心，牢记使命&rdquo;理想信念，切实增强&ldquo;四种意识&rdquo;、坚定&ldquo;四个自信&rdquo;。</p>
<p style="font-weight: 400;">&mdash;&mdash;坚持&ldquo;抓好党建就是最大政绩&rdquo;理念，突出抓好&ldquo;一把手&rdquo;这个关键，县委常委会定期研究党建工作，针对性地研究问题、部署工作，为基层党建工作把脉定向。县委常委带头落实党建联系点制度，常态化深入一线指导工作，从严推动基层党建深入开展。各级党组织书记认真落实党建任务清单、责任清单和纪实档案制度，层层推进党建责任落地落实。</p>
<p style="font-weight: 400;">&mdash;&mdash;坚持依靠党内政治生活锤炼党性，严格落实《准则》《条例》，县委班子带头召开脱贫攻坚、作风建设年专题民主生活会，各级党员干部积极在三会一课、统一活动日、周二扶贫日、主题党日等活动中发挥先锋作用，践行新理念、展现新作为、创造新业绩，涌现出曹红亮、王亚平等一大批焦裕禄式的好干部。</p>
<p style="font-weight: 400;">崇尚实干，鲜明导向，着力培养高素质专业化干部人才队伍</p>
<p style="font-weight: 400;">&mdash;&mdash;聚焦&ldquo;三项机制&rdquo;，坚持德才兼备、以德为先好干部标准，细化鼓励激励、容错纠错、能上能下具体情形，持续加大从脱贫攻坚战场、追赶超越一线考察选拔干部力度，强化日常考核、任职考核和综合研判成果运用，能者上、干者容、优者奖、庸者下的用人机制蔚然成风。</p>
<p style="font-weight: 400;">&mdash;&mdash;聚焦追赶超越，制定实施《合阳县2017年干部教育计划》，紧扣经济社会发展和脱贫攻坚主题，百余名领导干部赴中省市开拓视野、提升能力，千余名党员干部在&ldquo;古莘大讲堂&rdquo;&ldquo;农村干部讲堂&rdquo;集中轮训，万余名基层干部群众接受&ldquo;定制式&rdquo;产业扶贫培训，高素质专业化干部队伍日渐壮大。</p>
<p style="font-weight: 400;">&mdash;&mdash;聚力振兴发展，全面深化人才发展体制改革，下大力气招录、培养、引进急需紧缺型人才和创新创业型人才，全面落实住房、慰问、体检待遇，培育&ldquo;特色农业专家工作站&rdquo;2个，分别获得市委组织部10万元专项经费，县域人才资源得到进一步盘活。</p>
<p style="font-weight: 400;">强基固本，筑牢根基，扎实推进基层党建全面提升</p>
<p style="font-weight: 400;">&mdash;&mdash;坚持把抓基层打基础作为长远之计和固本之举，对标 &ldquo;五个规范&rdquo;建设，以三百攻坚、观摩问诊、考核排名为抓手，持续深化农村党建&ldquo;五星一旗&rdquo;争创活动，集中整治机关党建&ldquo;灯下黑&rdquo;问题，积极探索社区&ldquo;大党委&rdquo;格局，全面加强学校、国企、&ldquo;两新&rdquo;党组织建设，不断建强基层党组织战斗堡垒。</p>
<p style="font-weight: 400;">&mdash;&mdash;坚持把改革创新作为驱动引擎和根本动力，全面开展&ldquo;党建+3C&rdquo;品牌创建活动，以项目化管理思路，推动党建工作与脱贫攻坚、项目建设、作风建设同频共振，促进&ldquo;党建领航、服务发展，追赶超越、争创一流&rdquo;理念，高度融入经济社会发展的脉络之中。在全市率先试点&ldquo;互联网+党建&rdquo;云平台建设，打造&ldquo;一云两库三系统&rdquo;党建服务体系，县级指挥中心、党（工）委视频会议系统、村（社区）组工监控系统无缝即时连接，合阳特色&ldquo;智慧党建&rdquo;品牌风靡全省。</p>
<p style="font-weight: 400;">&mdash;&mdash;坚持抓好党建促脱贫攻坚，12名县级党员领导兼任镇街党委&ldquo;第一书记&rdquo;，160名优秀科级后备干部驻守脱贫攻坚一线，县镇村万名干部结对包联21445户贫困户，&ldquo;四支队伍、六股力量&rdquo;精准发力脱贫攻坚，&ldquo;双带双富&rdquo;&ldquo;村党组织+&rdquo;&ldquo;周述职、月考核、季观摩&rdquo;&ldquo;三变&rdquo;改革等系列活动深入开展，充分激活贫困村&ldquo;造血&rdquo;功能，为打赢脱贫攻坚战提供了坚强的组织保障。</p>
<p style="font-weight: 400;">自胜者强，越己者恒越。一年来，我县基层党建始终保持全市前列，&ldquo;两学一做&rdquo;学习教育在全市唯一交流发言，全市&ldquo;互联网+党建&rdquo;云平台推进会、&ldquo;村党组织引领发展集体经济&rdquo;专题培训班先后在我县召开，&ldquo;五星一旗&rdquo;主题创建活动荣获全市创新二等奖，村（组）干部绩效考核办法被全市推广，党建e平台获市级创意组织生活奖&hellip;&hellip;</p>
<p style="font-weight: 400;">作别一年来的收获和喜悦，我们将站在新的历史起点上，深入学习贯彻落实党的十九大精神，进一步拿出勇气，鼓足干劲，埋头苦干，锐意进取，以新形象新作为在全面从严治党的新征程上破浪前进、驶向辉煌。</p>`
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>

