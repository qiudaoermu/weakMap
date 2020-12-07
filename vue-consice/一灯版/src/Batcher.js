function Batcher() {
  this.reset();
}
Batcher.prototype.reset = function () {
  this.has = {}
  this.queue = [];
  this.waiting = false;
}
Batcher.prototype.push = function (job) {
  if (!this.has[job.name]) {
    this.queue.push(job);
    this.has[job.name] = job;
    if (!this.waiting) {
      this.waiting = true;
      setTimeout(() => {
        this.flush()
      })
    }
  }
}

Batcher.prototype.flush = function () {
  this.queue.forEach((job) => {
    job.cb();
  })
  this.reset();
}
