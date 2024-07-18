import MainLayout from 'layouts/MainLayout.vue';
import IndexPage from 'pages/IndexPage.vue';
import PersonagensPageView from 'src/pages/personagens/PersonagensPageView.vue';
import PersonagensPageForm from 'src/pages/personagens/PersonagensPageForm.vue';
import ErrorNotFound from 'pages/ErrorNotFound.vue';
import EquipamentosPageForm from 'src/pages/equipamentos/EquipamentosPageForm.vue';
import EquipamentoPageView from 'src/pages/equipamentos/EquipamentoPageView.vue';
import campanhaPageform from 'src/pages/campanha/CampanhaPageForm.vue';
import testePage from '../pages/testePage.vue'


const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: IndexPage }
    ]
  },
  {
    path: '/personagens',
    component: MainLayout,
    children: [

      { path: 'view', component: PersonagensPageView },
      { path: 'form', name :'personagens-form', component: PersonagensPageForm },
      { path: 'form/:id', name:'personagens-form-id', component: PersonagensPageForm }
    ]
  },
  {
    path: '/equipamentos',
    component: MainLayout,
    children: [

      { path: 'view', component: EquipamentoPageView },
      { path: 'form', name :'equipamentos-form', component: EquipamentosPageForm },
      { path: 'form/:id', name:'equipamentos-form-id', component: EquipamentosPageForm }
    ]
  },

  {
    path: '/campanhas',
    component: MainLayout,
    children: [

      { path: 'view', component: campanhaPageform },
      { path: 'form', name :'campanha-form', component: campanhaPageform },
      { path: 'form/:id', name:'campanha-form-id', component: campanhaPageform }
    ]
  },

  {
    path: '/teste',
    component: MainLayout,
    children: [

      { path: 'view', component: testePage },
      { path: 'form', name :'teste-form', component: testePage },
      { path: 'form/:id', name:'teste-form-id', component: testePage }
    ]
  },
  

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: ErrorNotFound
  }
]

export default routes
