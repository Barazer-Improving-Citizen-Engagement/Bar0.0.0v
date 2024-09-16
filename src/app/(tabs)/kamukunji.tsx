// kamukunji/index.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';
import { getForumPosts, voteOnPost } from '../../../services/forum';
import { ForumPost } from '../../../types/Forum';

export default function Kamukunji() {
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const fetchPosts = () => {
      const forumPosts = getForumPosts();
      setPosts(forumPosts);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      <Header title="Kamukunji" />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>By: {item.author}</Text>
            <Text style={styles.content}>{item.content}</Text>
            <View style={styles.voteSection}>
              <TouchableOpacity onPress={() => voteOnPost(item.id, true)}>
                <Text style={styles.voteButton}>Upvote</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => voteOnPost(item.id, false)}>
                <Text style={styles.voteButton}>Downvote</Text>
              </TouchableOpacity>
              <Text style={styles.votes}>Votes: {item.votes}</Text>
            </View>
          </View>
        )}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  post: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  author: { fontSize: 14, color: '#6c757d', marginBottom: 10 },
  content: { fontSize: 16, marginBottom: 15 },
  voteSection: { flexDirection: 'row', alignItems: 'center' },
  voteButton: { marginRight: 10, color: '#007bff', fontWeight: 'bold' },
  votes: { marginLeft: 'auto', fontWeight: 'bold' },
});
