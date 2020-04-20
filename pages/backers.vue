<template>
  <div class="backers-container">
    <h1>感谢小伙伴们的捐赠支持！</h1>
    <small>Thank you for your kind donation!</small>

    <p>谢谢你们的慷慨捐赠，用行动支持高质量、开放、自由的作品。在每日愈下的中文局域网环境中尤其需要这样的力量，谢谢你们！</p>
    <p>Thank you for making the effort to support high-quality, free and open works.</p>

    <section v-for="field of fields" :key="field.id" class="backers-section">
      <header>
        <h2>{{ field.chs }}</h2>
        <small>{{ field.eng }}</small>
      </header>

      <table>
        <thead>
          <tr>
            <th class="backers-date">日期/Date</th>
            <th v-if="field.id === 'multiple'" class="backers-times">次/Times</th>
            <th class="backers-name">昵称/Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in backers[field.id]" :key="p.name + p.date">
            <td class="backers-date">{{ p.date }}</td>
            <th v-if="field.id === 'multiple'" class="backers-times">{{ p.times }}</th>
            <td class="backers-name">{{ p.name }}</td>
          </tr>
        </tbody>
      </table>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      backers: require('@/assets/backers.json'),
      fields: [
        {
          id: 'generous',
          chs: '特别鸣谢：出手大方',
          eng: 'Special Acknowledgement: Generous Donation'
        },
        {
          id: 'multiple',
          chs: '特别鸣谢：多次支持',
          eng: 'Special Thanks: Multiple Donations'
        },
        {
          id: 'tea',
          chs: '感谢：喝上咖啡，精神抖擞',
          eng: 'Thank you: I get my daily dose of bubble tea!'
        },
        {
          id: 'allowance',
          chs: '感谢：喝上奶茶，甜入心扉',
          eng: "Thanks: I'll get myself a taco. "
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.backers-container {
  text-align: center;
  padding-top: 1em;
  background: #c7d2c4;
  color: #655c68;

  h1,
  h2 {
    margin: 0;
  }

  p {
    padding: 0 1em;
  }
}

.backers-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px #827886 dashed;
  margin: 0 20px;

  &:first-of-type {
    border-top: none;
  }

  header {
    position: sticky;
    top: 0;
    width: 100vw;
    padding: 10px;
    background: #c7d2c4;
  }

  table {
    table-layout: fixed;
    border-collapse: collapse;
    margin: 0 0 1rem 0;
    display: block;
    overflow-x: auto;
    background: #f8f3da;
  }

  tr {
    border-top: 1px solid #827886;
  }

  tr:nth-child(2n) {
    background-color: #f5e4c6;
  }

  td,
  th {
    border: 1px solid #827886;
    padding: 0.6em 1em;
  }
}

.backers-date {
  width: 10em;
}

.backers-times {
  width: 2em;
}

.backers-name {
  width: 15em;
}
</style>
