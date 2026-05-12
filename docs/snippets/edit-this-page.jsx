export const EditThisPage = ({ filePath }) => {
  const REPO_EDIT_BASE_URL = 'https://github.com/dylankenneally/react-native-ssh-sftp/edit/master';
  return (
    <div className="mt-10 rounded-2xl border border-zinc-950/10 bg-zinc-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
      <p className="m-0 text-sm text-zinc-600 dark:text-zinc-300">
        See something to improve?{' '}
        <a href={`${REPO_EDIT_BASE_URL}/${filePath}`}>Edit this page on GitHub</a>{' '}
        to suggest a change.
      </p>
    </div>
  )
}
