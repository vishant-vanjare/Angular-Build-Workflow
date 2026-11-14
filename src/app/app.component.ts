import { Component, HostListener, OnDestroy, OnInit, signal } from '@angular/core';

interface NavLink { id: string; label: string; }
interface Skill { name: string; icon: string; focus: string; color: string; }
interface Project { title: string; icon: string; text: string; tech: string[]; }

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  readonly name = 'Vishant Vanjare';
  readonly github = 'https://github.com/Vishant-Vanjare';
  readonly year = new Date().getFullYear();

  readonly links: NavLink[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  readonly roles = [
    'Web Developer',
    'Creative Tech Enthusiast',
    'Lifelong Learner',
    'Future Full Stack Developer',
  ];

  readonly skills: Skill[] = [
    { name: 'HTML5', icon: '🧱', focus: 'Semantic structure and accessible pages', color: '#FF5722' },
    { name: 'CSS3', icon: '🎨', focus: 'Flexbox, Grid, responsive layouts and animation', color: '#1572B6' },
    { name: 'JavaScript', icon: '⚡', focus: 'ES6+, DOM manipulation and interactivity', color: '#F7DF1E' },
    { name: 'Bootstrap', icon: '📱', focus: 'Responsive UI components', color: '#7952B3' },
    { name: 'Git & GitHub', icon: '🌿', focus: 'Commits, branches, merging and collaboration', color: '#F05032' },
    { name: 'Angular', icon: '🅰️', focus: 'Components, data binding and modern web apps', color: '#DD0031' },
  ];

  readonly projects: Project[] = [
    {
      title: 'Personal Portfolio',
      icon: '🌐',
      text: 'A responsive introduction and project showcase.',
      tech: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'E-Commerce UI',
      icon: '🛍️',
      text: 'Product cards and a shopping-page layout.',
      tech: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Git Practice',
      icon: '🧑‍💻',
      text: 'Repository, staging, commits and branches.',
      tech: ['Git', 'GitHub'],
    },
  ];

  roleIndex = signal(0);
  menuOpen = signal(false);
  scrolled = signal(false);

  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.timer = setInterval(
      () => this.roleIndex.update((i) => (i + 1) % this.roles.length),
      2200,
    );
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }
}
