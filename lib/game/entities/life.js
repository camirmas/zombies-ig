ig.module(
  'game.entities.life'
)
.requires(
  'impact.entity'
)
.defines(function() {
  EntityLife = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/life-sprite.png', 9, 9),
    size: { x: 7, y: 7 },
    gravityFactor: 0,
    checkAgainst: ig.Entity.TYPE.A,
    init: function(x, y, settings) {
      this.addAnim('idle', 1, [0]);
      this.parent(x, y, settings);
      this.currentAnim = this.anims.idle;
    },
    check: function(other) {
      if (other instanceof EntityPlayer) {
        ig.game.lives += 1;
        this.kill();
      }
    }
  });
});
