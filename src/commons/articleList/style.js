import styled from 'styled-components'

export const ListWrapper = styled.div`
  padding: .3rem;
  .list-more, .list-over{
    border-top: 1px lightgrey solid;
    color: #1e90ff;
    font-size: 1.2rem;
    padding: 2rem;
    text-align: center;
  }
`

export const CardWrapper = styled.div`
  @keyframes fadeInBottom{
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: fadeInBottom;
  border-top: 1px lightgrey solid;
  padding: 1rem .5rem;
  .card-title a{
    color: #1e90ff;
    font-size: 1.5rem;
  }
  .card-icon{
    color: grey;
    font-size: .9rem;
    padding: .8rem;
    display: flex;
    justify-content: flex-start;
    i{
      margin-right: 1.5rem;
      span{
        margin-right: .3rem;
      }
    }
  }
  .card-context{
    line-height: 1.6rem;
    margin: .5rem 0;
    width: 100%;
    text-align: center;
    img{
      border: 1px lightgrey solid;
      border-radius: .3rem;
      width: 90%;
    }
    p {
      text-align: left;
    }
  }
  .card-go{
    text-align: right;
    a{
      color: #1e90ff;
    }
  }
`