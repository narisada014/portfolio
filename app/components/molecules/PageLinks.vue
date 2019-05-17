<template>
  <div>
    <page-link linkUrl="/profiles" linkName="プロフィール" />
    <page-link linkUrl="/applications" linkName="アプリケーション" />
    <page-link linkUrl="/galleries" linkName="ギャラリー" />
    <a href="https://github.com/narisada014">ソースコード</a>
  </div>
</template>

<script>
import PageLink from '../atoms/PageLink'
export default {
  components: {
    PageLink
  }
}
</script>
