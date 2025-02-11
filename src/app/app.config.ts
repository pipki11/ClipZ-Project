import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyAe7jpDtz7JEbvUu-3ANnqXRwrFyCWrEzk',
        authDomain: 'clips-410a0.firebaseapp.com',
        projectId: 'clips-410a0',
        storageBucket: 'clips-410a0.firebasestorage.app',
        messagingSenderId: '916243880085',
        appId: '1:916243880085:web:3e98c65e5ad25189c7239c',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
