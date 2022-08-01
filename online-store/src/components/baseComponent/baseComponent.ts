class BaseComponent {
  container!: HTMLElement | null;
  inner!: string;

  create(): void {
    if (this.container) {
      this.container.innerHTML = this.inner;
    }
  }
}

export default BaseComponent;
