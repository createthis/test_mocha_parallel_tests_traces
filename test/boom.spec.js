describe('boom', () => {
  beforeEach(async () => {
    setTimeout(() => {
      throw new Error('boom!');
    }, 1)
  });

  describe('nested describe', async () => {
    it('should be a fake test that passes', async () => {
      true.should.be.true();
    });
    it('should be another fake test that passes', async () => {
      true.should.be.true();
    });
    it('should be a third fake test that passes', async () => {
      true.should.be.true();
    });
  });
});
