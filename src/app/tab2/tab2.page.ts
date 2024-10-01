import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Article } from '../interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  // Lista de categorías disponibles
  public categories: string[] = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];
  
  // Artículos que se mostrarán en la vista
  public articles: Article[] = [];
  
  // Categoría seleccionada por defecto (primera categoría)
  public selectedCategory: string = this.categories[0];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    // Cargar noticias para la categoría seleccionada al iniciar
    this.loadNewsByCategory(this.selectedCategory);
  }

  // Función que se ejecuta cuando el usuario cambia la categoría en el ion-segment
  segmentChanged(event: any) {
    this.selectedCategory = event.detail.value;
    this.loadNewsByCategory(this.selectedCategory);
  }

  // Función para cargar las noticias según la categoría seleccionada
  loadNewsByCategory(category: string) {
    this.newsService.getTopHeadlinesByCategory(category)
      .subscribe(articles => {
        this.articles = articles;  // Actualiza los artículos con los nuevos datos
      });
  }
}