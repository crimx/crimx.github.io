<template>
  <div class="backers-container">
    <Latte />

    <div class="p-pair">
      <p>谢谢你们的慷慨捐赠，用行动支持高质量、开放、自由的作品。改善中文局域网环境尤其需要这样的力量，谢谢你们！</p>
      <small>Thank you for making the effort to support high-quality, free and open works.</small>
    </div>

    <div class="dp-pair">
      <p>（列表每月更新）</p>
      <small>(Update monthly)</small>
    </div>

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
            <td v-if="field.id === 'multiple'" class="backers-times">{{ p.times }}</td>
            <td class="backers-name">{{ p.name }}</td>
          </tr>
        </tbody>
      </table>
    </section>

  </div>
</template>

<script>
import Latte from '@/components/Latte'

export default {
  components: {
    Latte
  },
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
          id: 'others',
          chs: '感谢你们的支持',
          eng: 'Thank you for your donation'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
html {
  background: #2b2726;
}

.backers-container {
  text-align: center;
  padding-top: 1em;
  background: #2b2726;
  color: #e2d2c0;

  h1,
  h2 {
    margin: 0;
  }

  p {
    padding: 0 1em;
  }
}

.backers-section {
  position: relative;
  border-top: 1px #875e3a dashed;

  &:first-of-type {
    border-top: none;
  }

  header {
    position: sticky;
    z-index: 100;
    top: 0;
    width: 100%;
    padding: 10px;
    background: #2b2726;
  }

  table {
    display: inline-table;
    table-layout: fixed;
    border-collapse: collapse;
    margin: 0 1rem 1rem;
    overflow-x: auto;
    color: #875e3a;
    background: #f8f3da;
  }

  tr {
    border-top: 1px solid #875e3a;
  }

  th,
  tr:nth-child(2n) {
    background-color: #f5e4c6;
  }

  td,
  th {
    border: 1px solid #875e3a;
    padding: 0.6em 1em;
  }
}

.p-pair {
  margin: 2em 0;

  p {
    margin: 0;
  }
}

.dp-pair {
  @extend .p-pair;
  opacity: 0.7;
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
