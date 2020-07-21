import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'carro0',
    loadChildren: () => import('./carro0/carro0.module').then( m => m.Carro0PageModule)
  },
  {
    path: 'carro1',
    loadChildren: () => import('./carro1/carro1.module').then( m => m.Carro1PageModule)
  },
  {
    path: 'carro2',
    loadChildren: () => import('./carro2/carro2.module').then( m => m.Carro2PageModule)
  },
  {
    path: 'carro3',
    loadChildren: () => import('./carro3/carro3.module').then( m => m.Carro3PageModule)
  },
  {
    path: 'carro4',
    loadChildren: () => import('./carro4/carro4.module').then( m => m.Carro4PageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'desenvolvedor',
    loadChildren: () => import('./desenvolvedor/desenvolvedor.module').then( m => m.DesenvolvedorPageModule)
  },
  {
    path: 'social',
    loadChildren: () => import('./social/social.module').then( m => m.SocialPageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./contato/contato.module').then( m => m.ContatoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
