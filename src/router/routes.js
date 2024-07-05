import MainLayout from 'layouts/MainLayout.vue';
import IndexPage from 'pages/IndexPage.vue';
import PersonagensPageView from 'src/pages/personagens/PersonagensPageView.vue';
import PersonagensPageForm from 'src/pages/personagens/PersonagensPageForm.vue';
import ErrorNotFound from 'pages/ErrorNotFound.vue';
import EquipamentosPageForm from 'src/pages/equipamentos/EquipamentosPageForm.vue';


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

      { path: 'view', component: PersonagensPageView },
      { path: 'form', name :'equipamentos-form', component: EquipamentosPageForm },
      { path: 'form/:id', name:'equipamentos-view', component: PersonagensPageForm }
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
