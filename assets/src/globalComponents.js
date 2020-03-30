import Spinner from 'vue-spinner/dist/vue-spinner.min.js';
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import Datepicker from 'vuejs-datepicker';
import VCalendar from 'v-calendar/lib/components/calendar.umd';
// import CountUp from 'Components/CountUp/CountUp';
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import AppCard from 'Components/AppCard/AppCard';
// import StatsCard from 'Components/StatsCard/StatsCard';
// import StatsCardV2 from "Components/StatsCardV2/StatsCardV2";
// import SocialStatsCard from 'Components/SocialStatsCard/SocialStatsCard';
import AppSectionLoader from 'Components/AppSectionLoader/AppSectionLoader';
import SliderTasas from "Components/Widgets/SliderTasas";
import CryptoSlider from "Components/Widgets/CryptoSlider2";
import IndicadoresTasas from "Components/Widgets/IndicadoresTasas";
import Calendario from "Components/Widgets/Calendario";
import GraphMercados from "Components/Widgets/GraphMercados";
import TablasMercados from 'Components/Widgets/TablasMercados';
// import DeleteConfirmationDialog from 'Components/DeleteConfirmationDialog/DeleteConfirmationDialog';
import GraphPetroleo from 'Components/Graph/GraphPetroleo';
import GraphOro from 'Components/Graph/GraphOro';
import GraphPetro from 'Components/Graph/GraphPetro';
import GraphBitcoin from 'Components/Graph/GraphBitcoin';
import GraphDolar from 'Components/Graph/GraphDolar';
import TableDolar from 'Components/Table/TableDolar';
import GraphEuro from 'Components/Graph/GraphEuro';
import TableEuro from 'Components/Table/TableEuro';
import TablePetroleo from 'Components/Table/TablePetroleo';
import GraphGeneral from 'Components/Graph/GraphGeneral';
import GraphVarForex from 'Components/Graph/GraphVarForex';
import GraphVarMateriaYCrypto from 'Components/Graph/GraphVarMateriaYCrypto';
import InfiniteSlideBar from 'vue-infinite-slide-bar';
import MarqueeText from 'vue-marquee-text-component';
import { FadeLoader } from "vue-spinner/dist/vue-spinner.min.js";

// import TasasSlider from "Components/Widgets/TasasSlider";
const GlobalComponents = {
    install(Vue) {
        // Vue.component('countUp', CountUp);
        Vue.component('appCard', AppCard);
        // Vue.component('statsCard', StatsCard);
        // Vue.component('statsCardV2', StatsCardV2);
        // Vue.component('socialStatsCard', SocialStatsCard);
        Vue.component('vuePerfectScrollbar', VuePerfectScrollbar);
        Vue.component('pageTitleBar', PageTitleBar);
        Vue.component('datePicker', Datepicker);
        Vue.component('Calendar', VCalendar);
        Vue.component('appSectionLoader', AppSectionLoader);
        // Vue.component('DeleteConfirmationDialog', DeleteConfirmationDialog);
        Vue.component('Spinner', Spinner);
        Vue.component('cryptoSlider', CryptoSlider);
        Vue.component('sliderTasas', SliderTasas);
        Vue.component('indicadoresTasas', IndicadoresTasas);
        Vue.component('calendario', Calendario);
        Vue.component('graphMercados', GraphMercados);
        Vue.component('TablasMercados', TablasMercados);
        Vue.component('GraphPetroleo', GraphPetroleo);
        Vue.component('GraphOro', GraphOro);
        Vue.component('GraphPetro', GraphPetro);
        Vue.component('GraphBitcoin', GraphBitcoin);
        Vue.component('GraphDolar', GraphDolar);
        Vue.component('TableDolar', TableDolar);
        Vue.component('GraphEuro', GraphEuro);
        Vue.component('TableEuro', TableEuro);
        Vue.component('TablePetroleo', TablePetroleo);
        Vue.component('GraphGeneral', GraphGeneral);
        Vue.component('GraphVarForex', GraphVarForex);
        Vue.component('GraphVarMateriaYCrypto', GraphVarMateriaYCrypto);
        Vue.component('FadeLoader', FadeLoader);
        Vue.component('InfiniteSlideBar', InfiniteSlideBar);
        Vue.component('MarqueeText', MarqueeText);
        // Vue.component('tasasSlider', TasasSlider);
    }
};
export default GlobalComponents;