<label className='check'><input type="checkbox" style={{ width: '20px', display: 'inline-block' }} value="1" id="multi" className="form-control" name="type" onChange={() => this.setVisibility("#multi", "#t1")} /> Multiple Chioce</label><br />
              <div className='new' id="t1" style={{ display: 'none' }}>
                <input name="questionText" type="text" placeholder="Question Title (i.e. What do you like best? )" style={{ width: '500px' }}   ></input>
                <input name="answerText" type="text" placeholder="answerText (i.e. apples, pie, chicken, ... )" style={{ width: '500px' }}   ></input>
              </div>