import styled from 'styled-components'

export const ListWrapper = styled.div`
  background-color: #fff;
  margin-top: 1.7rem;
  border-radius: .3rem;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  padding: .3rem;
  .list-header{
    font-size: 1.1rem;
    padding: 1rem;
  }
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
  padding: 2rem .5rem;
  .card-title a{
    color: #1e90ff;
    font-size: 1.5rem;
  }
  .card-icon{
    color: lightgrey;
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
    margin: 1rem 0;
    width: 100%;
    text-align: center;
    img{
      border: 1px lightgrey solid;
      border-radius: .3rem;
      width: 90%;
    }
    p {
      text-align: left;
      // text-indent: 2rem;
    }
  }
  .card-go{
    text-align: right;
    a{
      color: #1e90ff;
    }
  }
`