'use strict';

module.exports = ctx => {
  const filter = ctx.extend.filter;

  require('./after_post_render')(ctx);
  require('./before_post_render')(ctx);
  require('./before_exit')(ctx);
  require('./before_generate')(ctx);
  console.log("template locals being called with ctx", ctx);
  require('./template_locals')(ctx);
  console.log("ctx is now called", ctx);
  filter.register('new_post_path', require('./new_post_path'));
  filter.register('post_permalink', require('./post_permalink'));
  filter.register('after_render:html', require('./meta_generator'));
};
